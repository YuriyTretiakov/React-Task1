import PropTypes from "prop-types";
import './ButtonSlider.css';
import { ClassNames } from "@emotion/react";

export default function ButtonSlider({ className, label, disabled = false, onClick}) {
    return (
        <buttonSlider className={className} disabled={disabled} onClick={onClick}>{label}</buttonSlider>
    )
}
ButtonSlider.PropTypes ={
    ClassName: PropTypes.string,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
}
