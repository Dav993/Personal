function GlassesTrigger({ activateAlienMode }) {
    const handleClick = () => {
        activateAlienMode();
    };

    return (
        <section>
            <p>¿Estás seguro de que quieres ver la verdad?</p>
            <button onClick={handleClick}>Ponerse las gafas 🕶️</button>
        </section>
    );
}

export default GlassesTrigger;
