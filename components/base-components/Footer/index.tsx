import styles from './index.module.scss';
import { useStyles } from '@/hooks/useStyles';
// import LogoImage from '@/assets/images/logo/logo-light.svg';
import Logo from '@/components/base-components/Logo';
import Link from 'next/link';
import { fetcher } from 'services/helpers';
import useSWR from 'swr';
import { currentYear } from '@/utils/index';

interface Props {}

const Footer: React.FC<Props> = ({ initialData }: any) => {
  const s = useStyles(styles);

  const { data } = useSWR(
    `query investorRelationsCollectionQuery {
      investorRelationsCollection(order: sys_id_DESC, where: { featured: true }) {
        items {
          name,
          slug,
          featured
        }
      }
    }`,
    fetcher,
    {
      fallbackData: initialData
    }
  );

  return (
    <footer className={s('footer')}>
      <div className="container">
        <section className={s('top')}>
          {/* <Logo src={LogoImage} width={165} height={45} /> */}
          <div className={`${s('links-wrapper')} body-s`}>
            <div className={s('links')}>
              <h6 className="body-s bold">
                <Link href="/who-we-are">Who we are</Link>
              </h6>
              <Link href="/our-board">Board members</Link>
            </div>
            <div className={s('links')}>
              <h6 className="body-s bold">Property portfolio</h6>
              <Link href="/property-portfolio/south-africa">South Africa</Link>
              <Link href="/property-portfolio/europe">Europe</Link>
              <Link href="https://irongategroup.com.au" target="_blank">
                Australia
              </Link>
            </div>
            <div className={s('links')}>
              <h6 className="body-s bold">Investor relations</h6>
            </div>
            <div className={s('links')}>
              <h6 className="body-s bold">Sustainability</h6>
              <Link href="/more-on-esg">ESG</Link>
            </div>
            <div className={s('links')}>
              <h6 className="body-s bold">
                <Link href="/news">News &amp; insights</Link>
              </h6>
            </div>
            <div className={s('links')}>
              <h6 className="body-s bold">
                <Link href="/contact-us">Contact us</Link>
              </h6>
            </div>
          </div>
        </section>
        <section className={`${s('bottom')} body-xs`}>
          <div className={s('nav')}>
            <Link href="/legal">Legal</Link>
          </div>
          <div className={s('copyright')}>
            Copyright &copy; {currentYear} Burstone Group
          </div>
          <div className={s('social')}>
            {/* <Link
              href="https://www.youtube.com/channel/UC_Zf-O5oNR_lL9JI-weYTGw"
              target="_blank"
            >
              <YouTubeIcon />
            </Link>
            <Link
              href="https://za.linkedin.com/company/investec-property-fund"
              target="_blank"
            >
              <LinkedInIcon />
            </Link> */}
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

export async function getStaticProps() {
  const response = await fetcher(
    `query investorRelationsCollectionQuery {
      investorRelationsCollection(order: sys_id_DESC, where: { featured: true }) {
        items {
          name,
          slug,
          featured
        }
      }
    }`,
    true
  );

  return {
    props: { initialData: response }
  };
}
