import styles from '../../styles/components/footer.module.scss';

function Footer() {
   return (
      <footer className={styles.footerWrap}>
         <div className={styles.para}>
            <p>
               L'univers de Mario ne m'appartient pas, ce projet n'est
               aucunement rénuméré.
            </p>
            <p>
               Si vous êtes mené à payer pour{' '}
               <span title="Evil Kingdom or Hidden Face of Truth">EKoHFoT</span>
               , c'est que l'iniative ne vient pas de moi. Faites attention aux
               arnaques.
            </p>
         </div>
      </footer>
   );
}

export default Footer;
