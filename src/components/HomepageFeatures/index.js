import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Facil de Implementar',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        ¡Bienvenido/a a nuestra plataforma! Para que puedas empezar
        a utilizar nuestros documentos de manera rápida y eficiente,
        hemos preparado esta guía de implementación paso a paso.
      </>
    ),
  },
  {
    title: 'Explora nuestra Plataforma',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       Familiarízate con las diferentes secciones de nuestra plataforma.
       Puedes resolver cualquier pregunta solo echándoles un vistazo.
      </>
    ),
  },
  {
    title: 'Interfaz Intuitiva',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        El sistema de documentos presenta una interfaz clara y fácil
        de entender, con navegación sencilla y etiquetas claras,
        permitiendo encontrar y acceder a los documentos de manera rápida.
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
