import { useState, useCallback, useMemo } from 'react';


const Teste = () => {

    const [name, setName] = useState('Vitor');
    const [age, setAge] = useState(26);
    
    const handleChangeName = useCallback(() => {
        console.log('Alterou nome');
        setName(prev => prev === 'Vitor' ? 'Pedro' : 'Vitor')
    }, []);

    const handleChangeAge = useCallback(() => {
        const newAge = 10* age;
        console.log("age atual", age, newAge)
        setAge(prev => prev === 26 ? 32 : 26)
    }, [age]);
    //useMemo - referência em variaveis(const, var, let, ...)
    //useCallback - referencia em funcoes 
    //useEffect(() => {alert ('renderizei')},[]);
        
        const calculo = useMemo (() => {
            console.log('calculou', age);
            return 10 * age}, [age]);
    
        console.log('renderizei', calculo)

    
    return (
        <div>
            <p>
                {name}
            </p>
            <br />
            <p>
                {age}
            </p>
            <button onClick={handleChangeName}>Alterar nome</button>
            <button onClick={handleChangeAge}>Alterar age</button>
        </div>
    )
}
export { Teste };
