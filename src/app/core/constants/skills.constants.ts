export interface Skill {
    name: string;
    percentage: number;
    background: string;
}

export const FRONT_END_SKILLS: Skill[] = [
    { name: 'Angular', percentage: 95, background: '#dc2b68' },
    { name: 'TypeScript', percentage: 95, background: '#235a97' },
    { name: 'JavaScript', percentage: 95, background: '#F7DF1E' },
    { name: 'RxJS', percentage: 90, background: '#ec0f8f' },
    { name: 'NgRx', percentage: 85, background: '#571f7c' },
    { name: 'Nx', percentage: 70, background: '#18181a' }
];

export const TECHNOLOGIES: string[] = [
    'Angular Material',
    'Bootstrap',
    'SCSS',
    'LESS',
    'Git',
    'Azure DevOps',
    'Nx',
    'Webpack',
    'Vite',
    'GitHub Copilot'
];