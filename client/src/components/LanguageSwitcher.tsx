import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:border-[#2ECC71] transition text-gray-700 hover:text-[#2ECC71]"
      title={`Switch to ${i18n.language === 'en' ? 'French' : 'English'}`}
    >
      <Globe size={18} />
      <span className="font-semibold text-sm">
        {i18n.language.toUpperCase()}
      </span>
    </button>
  );
}
