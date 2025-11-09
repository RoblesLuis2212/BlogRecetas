import CardRecetas from './CardRecetas';

const Recetas = ({ recetas }) => {
    return (
        <section className='container mt-3'>
            <h2 className='text-center'>Recetas</h2>
            <div className="row">
                {recetas.map((itemReceta) => (
                    <div className="col-12 col-md-4 col-lg-3 mt-3 mt-md-2" key={itemReceta._id}>
                        <CardRecetas itemReceta={itemReceta} recetas={recetas}></CardRecetas>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Recetas;