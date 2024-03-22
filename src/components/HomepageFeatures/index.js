import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {  
    
    title: 'MAXPOINT',
    Svg: require('@site/static/img/Mxp.svg').default,
    description: (
      <>
        ¡Bienvenido/a: MAXPOINT es nuestro sistema de servicios
        implementado en todos los locales a nivel nacional.
      </>
    ),
  },
  {
    title: 'CANALES DIGITALES',
    Svg: require('@site/static/img/Cd.svg').default,
    description: (
      <>
       Nos mantenemos en constante innovación y desarrollo de aplicativos
       tecnológicos para mejorar nuestros plataformas de canales digitales.
      </>
    ),
  },
  {
    title: 'SIR',
    Svg: require('@site/static/img/SIR.svg').default,
    description: (
      <>
        Es el sistema Interno donde se aloja la información
        interna de los Restauarantes: Venta, usuarios mermas.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
