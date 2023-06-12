import classes from "../utils/classes";
import { InputProps } from "./types";
import style from "./style/Input.module.scss";
import Icon from "../Icon";

export default function Input({ as = "input", label, icon, iconAfter, error, options, className, variants = [], children, ...props }: InputProps) {
    const Element = as;

    const variantStyles = classes(variants.map((c: string) => style[c]));

    const containerClassName = classes([style.container, variantStyles, className]);

    const icon1 = icon && (
        <span className={style.icon}>
            <Icon icon={icon} />
        </span>
    );

    const icon2 = iconAfter ? (
        <span className={style.icon}>{typeof iconAfter === "string" ? <Icon icon={iconAfter} /> : iconAfter}</span>
    ) : (
        error && (
            <span className={style.icon}>
                <Icon icon="error" />
            </span>
        )
    );

    const iconSelect = options && (
        <span className={classes([style.icon, style.dropdownIcon])}>
            <Icon icon="arrowHeadDown" />
        </span>
    );

    const selectElement = options && options && <Select options={options} {...props} />;

    const inputWrapper = (
        <div className={classes([style.inputWrapper, error && style.hasError])}>
            {icon1}
            {selectElement || <Element {...props} {...(options ? { type: "text" } : {})} />}
            {iconSelect}
            {icon2}
        </div>
    );

    return (
        <div className={containerClassName}>
            {label ? (
                <label>
                    <span className={style.label}>{label}</span>
                    {inputWrapper}
                </label>
            ) : (
                inputWrapper
            )}
            {error && <div className={style.error}>{error}</div>}
            {children && <div className={style.footer}>{children}</div>}
        </div>
    );
}

function Select({ options = {}, ...props }: InputProps) {
    const onChangeOption = (e: any) => {
        const { value } = e.target;
        props?.onChange && props?.onChange(value);
        e.target.blur();
    };

    const selectedKey = Object.keys(options).find((k) => options[k].value === props.value) || "";

    return (
        <>
            <input {...props} value={selectedKey} className={style.select} readOnly />

            <div className={style.options}>
                {Object.keys(options).map((k) => (
                    <button
                        key={k}
                        className={classes([style.option, options[k].value === props.value && style.selected])}
                        type="button"
                        {...options[k]}
                        onClick={onChangeOption}>
                        {k}
                    </button>
                ))}
            </div>
        </>
    );
}
