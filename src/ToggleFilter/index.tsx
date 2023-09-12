import React, { useEffect, useState } from 'react';
import style from './style/ToggleFilter.module.scss';
import { Option, ToggleFilterProps } from './types';

function ToggleFilter({ options, onChange }: ToggleFilterProps) {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    useEffect(() => {
        const defaultSelected = options.find(option => option.selected);
        setSelectedOption(defaultSelected ? defaultSelected.label : options[0]?.label);
      }, [options]);

      const handleClick = (option: Option) => {
        setSelectedOption(option.label);
        if (onChange) {
          onChange(option.label);
        }
      };
  
    return (
        <div className={style.toggleFilter}>
          {options.map((option, index) => (
            <div 
              key={index} 
              className={`${style.toggleOption} ${selectedOption === option.label ? style.selected : ''}`}
              onClick={() => handleClick(option)}
              style={{ color: option.color || (selectedOption === option.label ? '#101828' : '#D0D5DD') }}
            >
              {option.label}
            </div>
          ))}
        </div>
      );
}

export default ToggleFilter;
