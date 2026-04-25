const PrintName = (props) => {

    const {name} = props;

    return <>Helllooo {name} !!</>
}

const HelloWorld = () => {
    <PrintName name = {"Deepthi"} ></PrintName>
}

export default HelloWorld;