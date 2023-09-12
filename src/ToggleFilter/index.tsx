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

      const getOptionColor = (option: Option) => {
        if (option.color) {
            return option.color;
        }
        return selectedOption === option.label ? 'var(--color-tertiary)' : 'var(--color-text)';
      }
  
    return (
        <div className={style.toggleFilter}>
          {options.map((option, index) => (
            <div 
              key={index} 
              className={`${style.toggleOption} ${selectedOption === option.label ? style.selected : ''}`}
              onClick={() => handleClick(option)}
              style={{ color: getOptionColor(option) }}
            >
              {option.label}
            </div>
          ))}
        </div>
      );
}

export default ToggleFilter;
