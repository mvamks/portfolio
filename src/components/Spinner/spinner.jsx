import "./spinner.scss";


const Spinner = () => {
    return (
        <div className="spinner-wrapper">
            <div className="spenner-container">
                <div className="spinner">
                    <p>Загрузка...</p>
                </div>
            </div>
        </div>
    )
}

export default Spinner;