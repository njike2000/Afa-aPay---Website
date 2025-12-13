# Afa'a Pay Full-Stack Upgrade TODO

## Phase 1: Database & Schema Setup
- [x] Upgrade project to web-db-user feature
- [ ] Create file management schema in drizzle/schema.ts (files, documents tables)
- [ ] Run pnpm db:push to migrate database

## Phase 2: S3 File Storage Integration
- [ ] Implement file upload endpoint in server/routers.ts
- [ ] Implement file download/presigned URL endpoint
- [ ] Add file deletion endpoint
- [ ] Create server/storage.ts helpers for S3 operations

## Phase 3: UI Components & Dashboard
- [ ] Create file management dashboard page
- [ ] Build file upload component with drag-and-drop
- [ ] Create file list/gallery component
- [ ] Add file preview functionality
- [ ] Implement user authentication UI

## Phase 4: Testing & Validation
- [ ] Write vitest tests for file upload endpoint
- [ ] Write vitest tests for file retrieval endpoint
- [ ] Test S3 integration end-to-end
- [ ] Verify file storage and retrieval in browser

## Phase 5: Finalization
- [ ] Resolve Home.tsx conflict (preserve original design)
- [ ] Update App.tsx with new routes
- [ ] Test complete workflow
- [ ] Create final checkpoint
