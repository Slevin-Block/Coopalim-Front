import { forwardRef } from 'react';
import { CloseButton } from '@mantine/core';
import { Box, MyMultiSelect } from './MultiSelect.styled'
import Icon from '../Icon/Icon';
import { getInCss } from '../../../global/functions/getInCss';

const myData =
[{
    label : "",
    attIconLabels : [''],
    value : "",
    ruleIconLabels : "",
 },
]


// Proposed values on list field
const Item = forwardRef(({ label, attIconLabels, ruleIconLabels, id,  ...others }, ref) => {
    return (
        <Box ref={ref} id={id} {...others}>
            {label}
            
            <Icon field={ruleIconLabels} size={12} color={getInCss('--primary')}/>
            <div>
                {attIconLabels.map((att, i) => <Icon key={i} field={att} size={12} color={getInCss('--blueCoopalim')}/>)}
            </div>
        </Box>
    );
});

// Value in Input after selection
const Value = ({ label, attIconLabels, ruleIconLabels, onRemove, classNames, disabled, ...others }) => {
    return (
        <Box disabled={disabled} {...others} >
            {label}
            <Icon field={ruleIconLabels} size={12} color={getInCss('--primary')} />
            {attIconLabels.map((att, i) => <Icon key={i} field={att} size={12} color={getInCss('--blueCoopalim')}/>)}
            {!disabled && <CloseButton
                onMouseDown={onRemove}
                variant="transparent"
                size={22}
                iconSize={12}
                tabIndex={-1}
            />}
        </Box>
    );
}

const MultiSelect = ({data = myData, disabled, placeholder, className, value, onChange}) => {

    if (!data) return
    
    return (
        <div className={className}>
            <MyMultiSelect
                label="Participants :"
                placeholder={placeholder}
                data={data}
                value={value}
                disabled={disabled}
                onChange={onChange}
                searchable
                clearable
                maxDropdownHeight={160}
                valueComponent={Value}
                itemComponent={Item}
            />
        </div>
    );
}


export default MultiSelect