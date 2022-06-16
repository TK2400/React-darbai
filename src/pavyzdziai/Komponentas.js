export default function Komponentas(props) {
    if (props.title) {
        return (
            <div>
                <h3>
                    {props.tekstas}

                </h3>
                <p>
                    Tekstas visdada matomas
                </p>
            </div>
        )
    } return (
        <div>
            <p>
                Tekstas visdada matomas
            </p>
        </div>
    )




}