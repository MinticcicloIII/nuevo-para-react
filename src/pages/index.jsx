import CardRazasPerros from "components/cardRazasPerros";
import 'styles/styles.css';
import pitbull from 'media/pitbull.jpg';
import pastor from 'media/Cane_da_pastore_tedesco_adulto.jpg';
import pug from 'media/pug.jpg';
import borderCollie from 'media/border-collie-.jpeg';
import Layout from "layouts/Layout";


function Index(){
    return(
        <div>
            <section>
                    <h1>Razas de perros</h1>
                    <ul className="breedCardContainer">
                        <CardRazasPerros nombreRaza="Pitbull" img={pitbull} color="backgroundVerde"/>
                        <CardRazasPerros nombreRaza="Pug" img={pug} color="backgroundVerde"/>
                        <CardRazasPerros nombreRaza="BorderCollie" img={borderCollie} color="backgroundRojo"/>
                        <CardRazasPerros nombreRaza="Pastor Alemán" img={pastor} color="backgroundRojo"/>
                    </ul>
                </section>
                <section></section>
        </div>
        )
}
/*Se puede usar acá el LAyourt pero no es cyhimba importar el Layout en cada pagina mejor en el App */
export default Index;