import CardRecetas from './CardRecetas';

const Recetas = () => {
    return (
        <section className='container mt-3'>
            <h2 className='text-center'>Recetas</h2>
            <div className="row border border-black">
                <div className="col-12 col-md-4 col-lg-3 border border-black">
                    <CardRecetas imagen="https://images.pexels.com/photos/4790315/pexels-photo-4790315.jpeg" nombrePlato="Hot Dogs" descripcion="El Hot Dog (o perrito caliente) es un popular bocadillo de comida rápida que consiste en una salchicha cocida servida dentro de un panecillo blando y alargado"></CardRecetas>
                </div>
                <div className="col-12 col-md-4 col-lg-3 border border-black">
                    <CardRecetas imagen="https://images.pexels.com/photos/5862147/pexels-photo-5862147.jpeg" nombrePlato="Parfait" descripcion="Un postre frío e indulgente con capas de cremosa nata o helado, generoso jarabe y chispas de chocolate, servido sobre una base crujiente de granola o galletas."></CardRecetas>
                </div>
                <div className="col-12 col-md-4 col-lg-3 border border-black">
                    <CardRecetas imagen="https://images.pexels.com/photos/29309713/pexels-photo-29309713.jpeg" nombrePlato="Mariscos" descripcion="Los camarones son pequeños crustáceos marinos caracterizados por su textura tierna y jugosa, y un sabor ligeramente dulce y salino. Excelente fuente de proteinas"></CardRecetas>
                </div>
                <div className="col-12 col-md-4 col-lg-3 border border-black">
                    <CardRecetas imagen="https://www.dondeir.com/wp-content/uploads/2016/08/malteadas.jpg" nombrePlato="Malteada" descripcion="La malteada es una bebida dulce y refrescante, espesa y cremosa, que se prepara batiendo helado con leche y un saborizante. Es la bebida clásica por excelencia."></CardRecetas>
                </div>
            </div>
        </section>
    );
};

export default Recetas;