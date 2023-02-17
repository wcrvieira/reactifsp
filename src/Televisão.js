import { useEffect, useState} from "react";

export default function Televisão(props) {
    const [ligado, setLigado] = useState(false);
    const [volume, setVolume] = useState(4);
    const [canal, setCanal] = useState(props.chMin);

    /*useEffect(() => {
        alert('Fim de transmissão');
    }); */

    const handleLigar = () => {
        setLigado(!ligado);
    }

    const handleAumentarVolume = () => {
        if(volume < 10)
            setVolume(volume+1);
    }

    const handleDiminuirVolume = () => {
        if(volume > 0)
            setVolume(volume-1);
    }

    const handleSintonizarAbaixo = () => {
        if(canal === props.chMin)
            setCanal(props.chMax);
        else
            setCanal(canal-1);
    }

    const handleSintonizarAcima = () => {
        if(canal === props.chMax)
            setCanal(props.chMin);
        else    
            setCanal(canal+1);
    }

    let mensagem = null;

    if (!ligado)
        mensagem = <span className="text-danger">Desligado</span>
    else
        mensagem = <span className="text-success">Ligado</span>

    return(
        <div>
            Televisão {props.marca} está {mensagem}
            <div>
                <button className="btn btn-primary" onClick={handleLigar}>Ligar/Desligar</button>
            </div>

            {
                ligado === true &&
                    <div>
                        <span>Volume: {volume}</span>
                        <button className="btn btn-danger"
                            onClick={handleDiminuirVolume}>-</button>
                        <button className="btn btn-success"
                            onClick={handleAumentarVolume}>+</button>
                    </div>
            }

            {ligado && <div>
                <span>Canal: {canal}</span>
                    <button className="btn btn-dark" 
                        onClick={handleSintonizarAbaixo}>V</button>
                    <button className="btn btn-secondary"
                        onClick={handleSintonizarAcima}>^</button>
            </div>}
        </div>
    );
}
