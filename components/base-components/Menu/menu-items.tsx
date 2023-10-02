import { MenuItem } from '@/types/menu';

const irUrl = '/investor-relations';
const ppUrl = '/property-portfolio';

export const MenuItems: MenuItem[] = [
  {
    name: 'Who we are',
    url: '/who-we-are'
  },
  {
    name: 'Property portfolio',
    url: ppUrl,
    dropdown: {
      title: 'Global portfolio',
      overviewButton: {
        name: 'View global overview',
        url: ppUrl
      },
      intro:
        'Our internationally diversified businesses provide the Fund with investment capability across multiple strategies and risk profiles allowing Burstone to enjoy returns through the whole property life cycle.',

      // This needs to come from database
      menu: [
        {
          name: 'South Africa',
          url: `${ppUrl}/south-africa`
        },
        {
          name: 'Europe',
          url: `${ppUrl}/europe`
        },
        {
          name: 'Australia',
          url: 'https://irongategroup.com.au'
        }
      ]
    }
  },
  {
    name: 'Investor relations',
    url: irUrl,
    dropdown: {
      title: 'Investor relations',
      overviewButton: {
        name: 'View investor relations',
        url: irUrl
      },
      intro:
        'We are committed to delivering value to our stakeholders by transforming potential into positive outcomes. Our strategy, our approach, our reports, results and ratings can all be found here.',
      menu: [
        {
          name: '2023 annual report',
          url: 'https://downloads.ctfassets.net/lwj37n970879/6UOJohH30NYEmBwu3Uz8SN/29d42f26b1630f6fe1abb195f5ef7311/2023_Integrated_Report_and_Annual_Financial_Statements.pdf',
          target: '_blank'
        },
        {
          name: 'Latest announcements',
          url: `${irUrl}/latest-announcements`
        },
        {
          name: 'Financial reports',
          url: `${irUrl}/financial-reports`
        },
        {
          name: 'Financial results',
          url: `${irUrl}/financial-results`
        },
        {
          name: 'Regulatory news',
          url: `${irUrl}/regulatory-news`
        },
        {
          name: 'Debt investors',
          url: `${irUrl}/debt-investors`
        },
        {
          name: 'BEE ratings',
          url: `${irUrl}/bee-ratings`
        }
      ]
    }
  },
  {
    name: 'Sustainability',
    url: '/sustainability'
    // dropdown: {
    //   title: 'A global conscience',
    //   overviewButton: {
    //     name: 'View sustainability',
    //     url: '/sustainability'
    //   },
    //   intro: 'And an ethos of sustainability in all we do.',
    //   menu: [
    //     {
    //       name: 'ESG',
    //       url: '/more-on-esg'
    //     }
    //   ]
    // }
  },
  {
    name: 'News & insights',
    url: '/news'
  },
  {
    name: 'Contact us',
    url: '/contact-us'
  }
];
