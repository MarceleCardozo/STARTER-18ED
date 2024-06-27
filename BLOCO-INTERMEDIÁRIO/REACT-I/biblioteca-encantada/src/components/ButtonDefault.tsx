interface ButtonDefaultProps {
    label: string;
}

function ButtonDefault({label}: ButtonDefaultProps) {
    return (   
        <>
            <button type="submit">{label}</button>
        </>
    );
}

export default ButtonDefault;