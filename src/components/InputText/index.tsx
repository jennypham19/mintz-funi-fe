import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import {
  DatePicker,
  DatePickerProps,
  DateTimePicker,
  DateTimePickerProps,
} from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import localeData from 'dayjs/plugin/localeData';

dayjs.extend(weekday);
dayjs.extend(localeData);

dayjs.locale('en'); 

type CustomInputType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'date'
  | 'datetime';

interface CustomInputProps {
  type: CustomInputType;
  placeholder?:string,
  name: string;
  label?: string;
  value?: string | Dayjs | null | number;
  maxDate?: Dayjs | undefined;
  onChange: (name: string, value: string | Dayjs | null | number) => void;
  error?: boolean;
  helperText?: React.ReactNode;
  required?: boolean;
  fullWidth?: boolean;
  margin?: TextFieldProps['margin'];
  variant?: TextFieldProps['variant'];
  disabled?: boolean;
  sx?: SxProps<Theme>;
  multiline?: boolean;
  rows?: number;
  textFieldProps?: Omit<
    TextFieldProps,
    | 'type' | 'name' | 'label' | 'value' | 'onChange' | 'error' | 'helperText'
    | 'required' | 'fullWidth' | 'margin' | 'variant' | 'disabled' | 'sx' | 'onFieldBlur'
  >;
  datePickerProps?: Omit<
    DatePickerProps<Dayjs>,
    | 'value' | 'onChange' | 'label' | 'disabled' | 'slotProps' | 'sx' | 'maxDate'
  >;
  dateTimePickerProps?: Omit<
    DateTimePickerProps<Dayjs>,
    | 'value' | 'onChange' | 'label' | 'disabled' | 'slotProps' | 'sx' 
  >;
  onlyPositiveNumber?: boolean;
  from?: string;
  autoComplete?: string;
}

const InputText: React.FC<CustomInputProps> = ({
  type,
  name,
  label,
  value,
  placeholder,
  onChange,
  error = false,
  helperText,
  required = false,
  fullWidth = true,
  margin = 'none',
  variant = 'outlined',
  disabled = false,
  sx = {},
  multiline = false,
  rows,
  textFieldProps = {},
  datePickerProps = {},
  dateTimePickerProps = {},
  onlyPositiveNumber = false,
  maxDate,
  from, 
  autoComplete
}) => {

  const commonSlotTextFieldProps = {
    name, label, required, error, helperText, fullWidth, margin, variant, disabled,
  };

  const directTextFieldBaseProps = {
    name, label, required, error, helperText, fullWidth, margin, variant, disabled,
  };

  


  if (type === 'date') {
    return (
      <DatePicker
        label={label}
        value={value as Dayjs | null}
        onChange={(newValue: Dayjs | null) => onChange(name, newValue)}
        disabled={disabled}
        maxDate={maxDate}
        sx={sx}
        slotProps={{
          textField: {
            sx:{
                mt: 0,
                "& .MuiOutlinedInput-notchedOutline":{
                    border:"1px solid rgb(82, 81, 81)",
                    borderRadius:"8px",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border:"1px solid rgb(82, 81, 81)"
                },
            },
            ...commonSlotTextFieldProps
           },
           popper: {
              modifiers: [
                {
                  name: 'offset',
                  options: {
                    offset: [0, 10],
                  },
                },
                {
                  name: 'sameWidth',
                  enabled:  true,
                  phase: 'beforeWrite',
                  requires: ['commonSlotTextFieldProps'],
                  fn({ state }){
                    state.styles.popper.width = `${state.rects.reference.width}px`;
                  }
                }
              ],
            },
            layout: {
              sx: {
                borderRadius: 2,
              },
            },
            day: {
              sx: {
                borderRadius: '6px',
                fontSize: '14px',
                '&.Mui-selected': {
                  backgroundColor: '#1976d2',
                },
              },
            },
            calendarHeader: {
              sx: {
                '& .MuiPickersCalendarHeader-label': {
                  fontWeight: 500,
                  textTransform: 'capitalize',
                },
              },
            },
        }}
        format="DD/MM/YYYY"
        {...datePickerProps}
      />
    );
  }

  if (type === 'datetime') {
    return (
      <DateTimePicker
        label={label}
        value={value as Dayjs | null}
        onChange={(newValue: Dayjs | null) => onChange(name, newValue)}
        disabled={disabled}
        sx={sx}
        slotProps={{
          textField: { ...commonSlotTextFieldProps },
        }}
        ampm={false}
        format="DD/MM/YYYY HH:mm"
        {...dateTimePickerProps}
      />
    );
  }

  const finalTextFieldProps: TextFieldProps = {
    ...textFieldProps,
    type: (type === 'text' && multiline) ? undefined : type,
    value: value as string | number,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      const val = event.target.value
      if(onlyPositiveNumber){
        //Cho phép xóa trắng
        if(val.trim() === ''){
          onChange(name, val);
          return;
        }

        // Kiểm tra số dương hợp lệ (số thực hoặc số nguyên dương)
        const numVal = Number(val);
        
        if(!isNaN(numVal) && numVal > 0 && /^\d*\.?\d*$/.test(val)){
          onChange(name,val);
        }
        // Nếu không hợp lệ thì bỏ qua, không gọi onChange => không update value
      }else{
        onChange(name, val)
      }
    },
    name,
    label,
    required,
    placeholder,
    error,
    helperText,
    fullWidth,
    margin,
    variant,
    disabled,
    sx,
    multiline: multiline,
    rows: multiline ? rows : undefined,
    autoComplete
  };


  return (
    <TextField
        autoComplete={autoComplete}
        InputProps={{
            sx:{
                "& .MuiOutlinedInput-notchedOutline":{
                    border: from ? "1px solid #F2F2F2" : "1px solid rgb(53, 50, 50)",
                    borderRadius:"8px",
                },
                "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: from ? "1px solid #F2F2F2" : "1px solid rgb(53, 50, 50)",
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    border: from ? "1px solid #F2F2F2" : "1px solid rgb(53, 50, 50)",
                },
                '& .MuiInputBase-input::placeholder': {
                  color: from ? '#BBB7B6' : "grey"
                },
                // 🔹 Đổi màu khi có value
                backgroundColor: value ? "#ffffff" : "transparent",
                color: value && from ? "#004d40" : (from ? "white" : "black"),
                transition: "all 0.2s ease",
            }
        }}
        sx={{
          ...sx,
        }}
      {...finalTextFieldProps}
    />
  );
};

export default InputText;