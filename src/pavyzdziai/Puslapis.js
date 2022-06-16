import Komponentas from "./Komponentas"



export default function Puslaips (props) {
    
    const komponentoTekstas = "Laba diena, kas tu"
    const pavadinimai = [
        'episodas 1',
        'episodas 2',
        'episods 3'
    ]
    
    return (
        <div>
       <h1>Labas</h1>
       <Komponentas tekstas={komponentoTekstas}
       pavadinimai = {pavadinimai}/>
       </div>
    )
}