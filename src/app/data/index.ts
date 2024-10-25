import EmotionalCore from '../../../public/images/project-emotional-core.png';
import PortFolio from '../../../public/images/project-portfolio.png';
import Taskify from '../../../public/images/project-taskify.png';
import PjwSippet from '../../../public/images/project-snippet.png';
import Yumu from '../../../public/images/project-yumu.png';
import Rolling from '../../../public/images/project-rolling.png';
import HtmlIcon from '../../../public/images/svgs/HTML.svg';
import CSSIcon from '../../../public/images/svgs/CSS.svg';
import JavaScriptIcon from '../../../public/images/svgs/JavaScript.svg';
import TypeScriptIcon from '../../../public/images/svgs/TypeScript.svg';
import ReactIcon from '../../../public/images/svgs/React.svg';
import NextJsIcon from '../../../public/images/svgs/Nextjs.svg';
import ThreeJsIcon from '../../../public/images/svgs/Threejs.svg';
import TailwindIcon from '../../../public/images/svgs/TailWind.svg';
import SASSIcon from '../../../public/images/svgs/Sass.svg';
import StyledComponentsIcon from '../../../public/images/svgs/Styled-Components.svg';
import ReactQueryIcon from '../../../public/images/svgs/React-Query.svg';
import ReactHookFormIcon from '../../../public/images/svgs/ReactHookForm.svg';
import AxiosIcon from '../../../public/images/svgs/Axios.svg';
import GitIcon from '../../../public/images/svgs/Git.svg';
import GitHubIcon from '../../../public/images/svgs/GitHub.svg';
import VercelIcon from '../../../public/images/svgs/Vercel.svg';
import NetlifyIcon from '../../../public/images/svgs/NetlifyDark.svg';
import VscodeIcon from '../../../public/images/svgs/Vscode.svg';
import LinkIcon from '../../../public/images/svgs/Link.svg';
import Profile from '../../../public/images/profile.png';
import { StaticImageData } from 'next/image';

export const navigationList = [
  { label: 'Home', link: '/', icon: 'home', newTab: false },
  { label: 'About', link: '/about', icon: 'about', newTab: false },
  { label: 'Projects', link: '/projects', icon: 'projects', newTab: false },
  { label: 'Career', link: '/career', icon: 'career', newTab: false },
  {
    label: 'Information',
    link: '/information',
    icon: 'information',
    newTab: false,
  },
  {
    label: 'Github',
    link: 'https://www.github.com/PJW980921',
    icon: 'github',
    newTab: true,
  },
  {
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/pjw980921/',
    icon: 'linkedin',
    newTab: true,
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/pjw98__/',
    icon: 'instagram',
    newTab: true,
  },
];

export interface ProjectType {
  id: number;
  name: string;
  title: string;
  duration: string;
  description: string;
  src: StaticImageData;
  alt: string;
  skills: {
    id: number;
    icon: StaticImageData;
    alt: string;
  }[];
  links: {
    url: string;
    ariaLabel: string;
    icon: StaticImageData;
    alt: string;
  }[];
}

// ----------------------------------------------------------------------

export const projectList: ProjectType[] = [
  {
    id: 0,
    name: 'PJW WEB PortFolio',
    title: 'PJW Web PortFolio - 박지원 웹 포트폴리오',
    duration: '2024/10 ~ 진행중',
    description: `저를 상세히 표현하기 위한 웹 포트폴리오입니다.
React로 개발한 포트폴리오는 검색 엔진 최적화(SEO)에 취약 하기 때문에
이러한 단점을 보완하고자, 서버 사이드 렌더링(SSR)을 지원하는
Next.js를 택하고 개발을 진행 했습니다.
웹 접근성 및 웹 표준성, 반응형 웹으로 개발하여 사용성을 향상시켰습니다.
자기소개, 프로젝트 경험, 인적사항 등 저의 정보에 대해 확인할 수 있습니다.`,
    src: PortFolio,
    alt: 'JiWonPark Project Web PortFolio Image',
    skills: [
      { id: 0, icon: TypeScriptIcon, alt: 'TypeScript Icon' },
      { id: 1, icon: ReactIcon, alt: 'React Icon' },
      { id: 2, icon: NextJsIcon, alt: 'Next.js Icon' },
      { id: 3, icon: TailwindIcon, alt: 'TailwindIcon Icon' },
      { id: 4, icon: ThreeJsIcon, alt: 'Three.js Icon' },
      { id: 5, icon: VercelIcon, alt: 'Vercel Icon' },
    ],
    links: [
      {
        url: 'https://pjw-portfolio.vercel.app/',
        ariaLabel: 'PJW Web PortFolio Site Link',
        icon: LinkIcon,
        alt: 'Link Icon',
      },
      {
        url: 'https://github.com/PJW980921/portfolio',
        ariaLabel: 'PJW Web PortFolio Github Link',
        icon: GitHubIcon,
        alt: 'GitHub Icon',
      },
    ],
  },
  {
    id: 1,
    name: 'pjw-snippets',
    title: 'pjw-snippets - React snippet Extension',
    duration: '2024/07',
    description: `TypeScript 및 JavaScript를 위한 React 스니펫 모음 익스텐션입니다.
    프로젝트 개발을 진행하면서 개발 생산성 향상 및 
    저만의 익스텐션을 개발 하고자 기획하게 되었습니다. 
    함수형 컴포넌트와 기타 유용한 스니펫을 포함하고 있습니다.`,
    src: PjwSippet,
    alt: 'JiWonPark Project pjw-snippets Extension Image',
    skills: [
      { id: 0, icon: TypeScriptIcon, alt: 'TypeScript Icon' },
      { id: 1, icon: JavaScriptIcon, alt: 'JavaScript Icon' },
      { id: 2, icon: VscodeIcon, alt: 'Vscode Icon' },
    ],
    links: [
      {
        url: 'https://github.com/PJW980921/pjw-snippets',
        ariaLabel: 'pjw-sippets Extension Github Link',
        icon: GitHubIcon,
        alt: 'GitHub Icon',
      },
    ],
  },
  {
    id: 2,
    name: 'Taskify',
    title: 'Taskify - 모달 기반 일정 관리 플랫폼',
    duration: '2024/01 ~ 2024/02',
    description: `해야 할 일을 등록하고, 
    일의 우선순위를 관리할 수 있는 모달 기반 일정 관리 플랫폼입니다.
프론트엔드 5명과 개발하였으며, 
Next.js를 학습하는 목적으로 Next.js를 택하고 개발을 진행했습니다.
새로운 팀원을 초대할 수 있으며, 구성원을 초대하고 내보낼 수 있습니다.`,
    src: Taskify,
    alt: 'JiWonPark Project Taskify PlatForm Image',
    skills: [
      { id: 0, icon: TypeScriptIcon, alt: 'TypeScript Icon' },
      { id: 1, icon: ReactIcon, alt: 'React Icon' },
      { id: 2, icon: NextJsIcon, alt: 'Next.js Icon' },
      { id: 3, icon: TailwindIcon, alt: 'TailwindIcon Icon' },
      { id: 4, icon: ReactHookFormIcon, alt: 'React Hook Form Icon' },
      { id: 5, icon: AxiosIcon, alt: 'Axios Icon' },
      { id: 6, icon: VercelIcon, alt: 'Vercel Icon' },
    ],
    links: [
      {
        url: 'https://codeit-top-secret-x.vercel.app/',
        ariaLabel: 'Taskify Site Link',
        icon: LinkIcon,
        alt: 'Link Icon',
      },
      {
        url: 'https://github.com/PJW980921/codeit-top-secret-X',
        ariaLabel: 'Taskify Github Link',
        icon: GitHubIcon,
        alt: 'GitHub Icon',
      },
    ],
  },
  {
    id: 3,
    name: 'EmotionalCore',
    title: '감성코어(EmotionalCore) - 시 및 웹 소설 플랫폼',
    duration: '2024/10 ~ 진행중',
    description: `프론트엔드2명, 백엔드3명과 함께 작업중인 플랫폼입니다.
네이버 블로그를 대체할 웹 커뮤니티를 만들자는 목적과
프로젝트 경험을 쌓고 발전해 나가고싶은 사람들을 모아서
서로 지식공유 목적으로 프로젝트를 진행하고 있습니다.
팀장으로서 적극적인 소통 및 피드백 반영을 하고있으며,
체계적인 프로젝트 관리를 담당하고 있습니다.
현재는 디자이너분을 채용중에 있습니다. 
디자이너분을 컨택 하고나서 디자인 작업이 진행 되면 개발이 진행 될 예정입니다.`,
    src: EmotionalCore,
    alt: 'JiWonPark Project EmotionalCore PlatForm Image',
    skills: [
      { id: 0, icon: TypeScriptIcon, alt: 'TypeScript Icon' },
      { id: 1, icon: ReactIcon, alt: 'React Icon' },
      { id: 2, icon: NextJsIcon, alt: 'Next.js Icon' },
      { id: 3, icon: TailwindIcon, alt: 'TailwindIcon Icon' },
      { id: 4, icon: ReactQueryIcon, alt: 'React Query Icon' },
      { id: 5, icon: VercelIcon, alt: 'Vercel Icon' },
    ],
    links: [
      {
        url: 'https://emotional-core.vercel.app/',
        ariaLabel: 'EmotionalCore Site Link',
        icon: LinkIcon,
        alt: 'Link Icon',
      },
      {
        url: 'https://github.com/EmotionalCore/frontend',
        ariaLabel: 'EmotionalCore Github Link',
        icon: GitHubIcon,
        alt: 'GitHub Icon',
      },
    ],
  },
  {
    id: 4,
    name: 'YUMU',
    title: '유무(YUMU) - 예술 작품 경매 플랫폼',
    duration: '2024/02 ~ 2024/04',
    description: `프론트엔드5명, 백엔드2명, 디자이너1명과 개발한 플랫폼입니다.
아마추어 예술가들은 처리가 곤란한 자신의 작품을 경매로 선보여 뒷처리와 금전,
자기 어필의 기회를 얻고 일반 사용자들은 마음에 드는 작품을 비교적 저렴한 가격에 
구매할 수 있는 기회를 얻는 웹 서비스입니다.`,
    src: Yumu,
    alt: 'JiWonPark Project Yumu PlatForm Image',
    skills: [
      { id: 0, icon: TypeScriptIcon, alt: 'TypeScript Icon' },
      { id: 1, icon: ReactIcon, alt: 'React Icon' },
      { id: 2, icon: NextJsIcon, alt: 'Next.js Icon' },
      { id: 3, icon: TailwindIcon, alt: 'TailwindIcon Icon' },
      { id: 4, icon: ReactQueryIcon, alt: 'React Query Icon' },
      { id: 4, icon: ReactHookFormIcon, alt: 'ReactHookForm Icon' },
      { id: 4, icon: AxiosIcon, alt: 'Axios Icon' },
      { id: 5, icon: VercelIcon, alt: 'Vercel Icon' },
    ],
    links: [
      {
        url: 'https://github.com/PJW980921/YUMU-FE',
        ariaLabel: 'YUMU Github Link',
        icon: GitHubIcon,
        alt: 'GitHub Icon',
      },
    ],
  },
  {
    id: 5,
    name: 'Rolling',
    title: '롤링(Rolling) - 웹 롤링 페이퍼 플랫폼',
    duration: '2023/12 (3주간 진행)',
    description: `프론트엔드4명과 추억의 롤링 페이퍼를 웹으로 구현한 플랫폼입니다.
    나만의 롤링 페이퍼를 생성하거나 다른 서비스 이용자들의 롤링 페이퍼를 확인 하실 수 있습니다.`,
    src: Rolling,
    alt: 'JiWonPark Project Rolling PlatForm Image',
    skills: [
      { id: 0, icon: ReactIcon, alt: 'React Icon' },
      { id: 1, icon: StyledComponentsIcon, alt: 'StyledComponents Icon' },
      { id: 2, icon: NetlifyIcon, alt: 'Netlify Icon' },
    ],
    links: [
      {
        url: 'https://fluffy-shortbread-07838a.netlify.app/',
        ariaLabel: 'Rolling Site Link',
        icon: LinkIcon,
        alt: 'Link Icon',
      },
      {
        url: 'https://github.com/PJW980921/team-12-rolling',
        ariaLabel: 'Rolling Github Link',
        icon: GitHubIcon,
        alt: 'GitHub Icon',
      },
    ],
  },
];

// ----------------------------------------------------------------------

export interface Skill {
  id: number;
  src: string | StaticImageData;
  alt: string;
}

export type SkillCategoryType = {
  [key: string]: Skill[];
};

export interface InformationList {
  info: {
    id: number;
    profile: { src: string | StaticImageData; alt: string };
    name: string;
    phone: string;
    email: string;
    github: string;
  }[];
  skills: SkillCategoryType;
}

export const informationList = {
  info: [
    {
      id: 0,
      profile: { src: Profile, alt: 'profile' },
      name: '박지원',
      phone: '010-2411-1644',
      email: 'jackgg12322@gmail.com',
      github: 'https://github.com/PJW980921',
    },
  ],
  skills: {
    Frontend: [
      { id: 0, src: HtmlIcon, alt: 'HtmlIcon' },
      { id: 1, src: CSSIcon, alt: 'CSSIcon' },
      { id: 2, src: JavaScriptIcon, alt: 'JavaScriptIcon' },
      { id: 3, src: TypeScriptIcon, alt: 'TypeScriptIcon' },
      { id: 4, src: ReactIcon, alt: 'ReactIcon' },
      { id: 5, src: NextJsIcon, alt: 'NextJsIcon' },
    ],
    Styling: [
      { id: 6, src: SASSIcon, alt: 'SASSIcon' },
      { id: 7, src: TailwindIcon, alt: 'TailwindIcon' },
      { id: 8, src: StyledComponentsIcon, alt: 'Styled\nComponentsIcon' },
    ],
    Libraries: [
      { id: 9, src: ReactQueryIcon, alt: 'React\nQueryIcon' },
      { id: 10, src: ReactHookFormIcon, alt: 'ReactHook\nFormIcon' },
      { id: 11, src: AxiosIcon, alt: 'AxiosIcon' },
    ],
    'CI/CD': [
      { id: 12, src: GitHubIcon, alt: 'GitHubIcon' },
      { id: 13, src: GitIcon, alt: 'GitIcon' },
      { id: 14, src: VercelIcon, alt: 'VercelIcon' },
      { id: 15, src: NetlifyIcon, alt: 'NetlifyIcon' },
    ],
  },
};
