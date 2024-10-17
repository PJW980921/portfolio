import EmotionalCore from '../../../public/images/project-emotional-core.png';
import PortFolio from '../../../public/images/project-portfolio.png';
import Taskify from '../../../public/images/project-taskify.png';
// import HtmlIcon from '../../../public/images/svgs/HTML.svg';
// import CSSIcon from '../../../public/images/svgs/CSS.svg';
// import JavaScriptIcon from '../../../public/images/svgs/JavaScript.svg';
import TypeScriptIcon from '../../../public/images/svgs/TypeScript.svg';
import ReactIcon from '../../../public/images/svgs/React.svg';
import NextJsIcon from '../../../public/images/svgs/Nextjs.svg';
import ThreeJsIcon from '../../../public/images/svgs/Threejs.svg';
import ReactQueryIcon from '../../../public/images/svgs/React-Query.svg';
import ReactHookFormIcon from '../../../public/images/svgs/ReactHookForm.svg';
import AxiosIcon from '../../../public/images/svgs/Axios.svg';
// import GitIcon from '../../../public/images/svgs/Git.svg';
import GitHubIcon from '../../../public/images/svgs/GitHub.svg';
import VercelIcon from '../../../public/images/svgs/Vercel.svg';
import { StaticImageData } from 'next/image';
// import VscodeIcon from '../../../public/images/svgs/Vscode.svg';
import LinkIcon from '../../../public/images/svgs/Link.svg';

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
      { id: 3, icon: ThreeJsIcon, alt: 'Three.js Icon' },
      { id: 4, icon: VercelIcon, alt: 'Vercel Icon' },
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
    name: 'Taskify',
    title: 'Taskify - 모달 기반 일정 관리 플랫폼',
    duration: '2024/01 ~ 2024/02',
    description: `해야 할 일을 등록하고, 일의 우선순위를 관리할 수 있는 모달 기반 일정 관리 플랫폼입니다.
Next.js를 학습하는 목적으로 Next.js를 택하고 개발을 진행했습니다.
새로운 팀원을 초대할 수 있으며, 구성원을 초대하고 내보낼 수 있습니다.`,
    src: Taskify,
    alt: 'JiWonPark Project Taskify PlatForm Image',
    skills: [
      { id: 0, icon: TypeScriptIcon, alt: 'TypeScript Icon' },
      { id: 1, icon: ReactIcon, alt: 'React Icon' },
      { id: 2, icon: NextJsIcon, alt: 'Next.js Icon' },
      { id: 3, icon: ReactHookFormIcon, alt: 'React Hook Form Icon' },
      { id: 4, icon: AxiosIcon, alt: 'Axios Icon' },
      { id: 5, icon: VercelIcon, alt: 'Vercel Icon' },
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
    id: 2,
    name: 'EmotionalCore',
    title: '감성코어(EmotionalCore) - 시 및 웹 소설 플랫폼',
    duration: '2024/10 ~ 진행중',
    description: `프론트엔드2명, 백엔드3명과 함께 작업중인 플랫폼입니다.
네이버 블로그를 대체할 웹 커뮤니티를 만들자는 목적과
프로젝트 경험을 쌓고 발전해 나가고싶은 사람들을 모아서
서로 지식공유 목적으로 프로젝트를 진행하고 있습니다.
팀장으로서 적극적인 소통 및 피드백 반영을 하고있으며,
체계적인 프로젝트 관리를 담당하고 있습니다.
현재는 프론트엔드 팀원과 Figma를 활용하여 디자인 작업 중에 입니다.`,
    src: EmotionalCore,
    alt: 'JiWonPark Project EmotionalCore PlatForm Image',
    skills: [
      { id: 0, icon: TypeScriptIcon, alt: 'TypeScript Icon' },
      { id: 1, icon: ReactIcon, alt: 'React Icon' },
      { id: 2, icon: NextJsIcon, alt: 'Next.js Icon' },
      { id: 3, icon: ReactQueryIcon, alt: 'React Query Icon' },
      { id: 4, icon: VercelIcon, alt: 'Vercel Icon' },
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
];
