import { useState } from 'react';
import { ChevronDown, Users, Briefcase, Building2, Landmark, BarChart3 } from 'lucide-react';

const organizationTypes = [
  {
    id: 'individuals',
    label: 'Individuals & C2C',
    description: 'Consumer to Consumer transactions',
    icon: Users,
  },
  {
    id: 'smes',
    label: 'SMEs & Traders',
    description: 'Small and medium enterprises',
    icon: Briefcase,
  },
  {
    id: 'enterprises',
    label: 'Enterprises',
    description: 'Large corporations and businesses',
    icon: Building2,
  },
  {
    id: 'financial',
    label: 'Financial Institutions',
    description: 'Banks and payment providers',
    icon: BarChart3,
  },
  {
    id: 'government',
    label: 'Government & Public',
    description: 'Government agencies and public services',
    icon: Landmark,
  },
];

interface OrganizationSelectorProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
}

export default function OrganizationSelector({ selectedType, onTypeChange }: OrganizationSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selected = organizationTypes.find(type => type.id === selectedType);

  return (
    <div className="w-full">
      {/* Dropdown Button */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-3 bg-white border-2 border-[#001F3F] rounded-lg flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            {selected && (
              <>
                {(() => {
                  const Icon = selected.icon;
                  return <Icon className="w-5 h-5 text-[#2ECC71]" />;
                })()}
                <div className="text-left">
                  <div className="font-semibold text-[#001F3F]">{selected.label}</div>
                  <div className="text-xs text-gray-600">{selected.description}</div>
                </div>
              </>
            )}
          </div>
          <ChevronDown
            className={`w-5 h-5 text-[#001F3F] transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-[#001F3F] rounded-lg shadow-lg z-50">
            {organizationTypes.map((type) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => {
                    onTypeChange(type.id);
                    setIsOpen(false);
                  }}
                  className={`w-full px-6 py-4 flex items-center gap-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors ${
                    selectedType === type.id ? 'bg-green-50' : ''
                  }`}
                >
                  <Icon className="w-6 h-6 text-[#2ECC71]" />
                  <div className="text-left">
                    <div className="font-semibold text-[#001F3F]">{type.label}</div>
                    <div className="text-sm text-gray-600">{type.description}</div>
                  </div>
                  {selectedType === type.id && (
                    <div className="ml-auto w-2 h-2 bg-[#2ECC71] rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Quick Info Cards */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-3">
        {organizationTypes.map((type) => {
          const Icon = type.icon;
          return (
            <button
              key={type.id}
              onClick={() => {
                onTypeChange(type.id);
              }}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedType === type.id
                  ? 'border-[#2ECC71] bg-green-50'
                  : 'border-gray-200 bg-white hover:border-[#2ECC71]'
              }`}
            >
              <Icon className={`w-6 h-6 mx-auto mb-2 ${selectedType === type.id ? 'text-[#2ECC71]' : 'text-gray-600'}`} />
              <div className="text-xs font-semibold text-[#001F3F] text-center">{type.label}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
