import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createFile, getUserFiles, deleteFile } from "./db";
import { storagePut } from "./storage";
import { nanoid } from "nanoid";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  files: router({
    upload: protectedProcedure
      .input(z.object({
        fileName: z.string().min(1),
        fileData: z.string(),
        mimeType: z.string(),
        description: z.string().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        try {
          const buffer = Buffer.from(input.fileData, 'base64');
          const fileSize = buffer.length;
          const fileKey = `${ctx.user.id}/files/${nanoid()}-${input.fileName}`;

          const { url } = await storagePut(fileKey, buffer, input.mimeType);

          await createFile({
            userId: ctx.user.id,
            fileName: input.fileName,
            fileKey,
            fileUrl: url,
            mimeType: input.mimeType,
            fileSize,
            description: input.description,
          });

          return {
            success: true,
            message: "File uploaded successfully",
            fileUrl: url,
          };
        } catch (error) {
          console.error("File upload error:", error);
          throw new Error("Failed to upload file");
        }
      }),

    list: protectedProcedure
      .query(async ({ ctx }) => {
        try {
          const userFiles = await getUserFiles(ctx.user.id);
          return userFiles;
        } catch (error) {
          console.error("List files error:", error);
          throw new Error("Failed to list files");
        }
      }),

    delete: protectedProcedure
      .input(z.object({
        fileId: z.number(),
      }))
      .mutation(async ({ ctx, input }) => {
        try {
          await deleteFile(input.fileId, ctx.user.id);
          return {
            success: true,
            message: "File deleted successfully",
          };
        } catch (error) {
          console.error("Delete file error:", error);
          throw new Error("Failed to delete file");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
