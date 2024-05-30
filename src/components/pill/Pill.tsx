import React from 'react'

export interface PillProps {
  label: string;
  icon?: React.ReactNode;
}

const Pill: React.FC<PillProps> = ({ label, icon }) => {
  return (
    <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      {icon && <span className="mr-2">{icon}</span>}
      <span>{label}</span>
    </div>
  )
}

export default Pill