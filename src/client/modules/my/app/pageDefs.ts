import { Header } from '../../../typeDefs';

const adoptionHeaders: Header = {
    title: 'Lightning Adoption Workshops',
    subhead: `It's Better in Lightning`
};

const lexHeaders: Header = {
    title: 'Lightning Experience Workshops',
    subhead: 'Activate Lightning Experience',
    logoUrl: '/resources/lwc.png'
};

const titleOverrides: { [name: string]: Header } = {
    tdx19adoption: adoptionHeaders,
    df19lex: lexHeaders,
    df18adoption: adoptionHeaders,
    adoption: adoptionHeaders,
    cpq: {
        title: 'Salesforce CPQ'
    }
};

const pages: { [name: string]: string[] } = {
    df19lex: [
        'adoption_sales',
        'adoption_service',
        'flows_simple',
        'console_apps',
        'user_engagement',
        'js_buttons',
        'lex_now_what',
        'empower_flow',
        'new_mobile_app2'
    ],
    df19meadow: ['flows', 'crash_course', 'automate', 'agility'],
    df19park: ['cdc', 'code_for_clicks', 'lwc', 'heroku_connect_TH', 'epb_nba', 'nba', 'new_mobile_app', 'vision_language', 'einstein_discovery'],
    tdx19dev: ['heroku_connect', 'code_for_clicks', 'heroku_pipelines', 'lightning_vf', 'cdc', 'lwc'],

    tdx19admin: ['automate', 'crash_course', 'agility', 'flows', 'epb'],
    tdx19adoption: ['flows_simple', 'go_live', 'js_buttons', 'console_apps'],

    all: [
        'automate',
        'cdc',
        'lwc',
        'epb',
        'flows',
        'heroku_connect',
        'lightning_features',
        'code_for_clicks',
        'crash_course',
        'agility',
        'adoption_sales',
        'adoption_service',
        'go_live',
        'quick_actions',
        'lightning_vf',
        'reporting',
        'js_buttons',
        'heroku_pipelines',
        'console_apps',
        'flows_simple'
    ],

    main: [
        'automate',
        'cdc',
        'lwc',
        'epb',
        'flows',
        'heroku_connect',
        'lightning_features',
        'code_for_clicks',
        'crash_course',
        'agility',
        'adoption_sales',
        'adoption_service',
        'go_live',
        'quick_actions',
        'lightning_vf',
        'reporting',
        'js_buttons',
        'heroku_pipelines',
        'console_apps',
        'flows_simple'
    ],

    df18zone: [
        'agility',
        'heroku_connect',
        'code_for_clicks',
        'crash_course',
        // 'lightning_vf',
        'js_buttons',
        'heroku_pipelines'
    ],

    df18rapids: ['automate', 'agility', 'crash_course', 'reporting'],

    df18adoption: ['adoption_sales', 'adoption_service', 'go_live', 'quick_actions'],

    sfwt: [
        'automate',
        'cdc',
        'lwc',
        'epb',
        'flows',
        'heroku_connect',
        'lightning_features',
        'code_for_clicks',
        'crash_course',
        'agility',
        'adoption_sales',
        'adoption_service',
        'go_live',
        'quick_actions',
        'lightning_vf',
        'reporting',
        'js_buttons',
        'heroku_pipelines',
        'console_apps',
        'flows_simple'
    ],

    daydreamin: ['reporting', 'lightning_features', 'code_for_clicks'],

    adoption: [
        'adoption_sales',
        'adoption_service',
        'reporting',
        'go_live',
        'quick_actions',
        'lightning_features',
        // 'lightning_vf',
        'js_buttons'
    ],

    // demo stuff
    demos: [
        'electron_core_object',
        'demo_custExp',
        'demo_devexp',
        'demo_departmental',
        'demo_employeeengagement',
        'demo_align_heroku',
        'demo_volvo_lea',
        'demo_volvo_low_code',
        'easy_spaces',
        'demo_extend_crm',
        'demo_integrate',
        'demo_ducati_heroku',
        'demo_grocery',
        'demo_encryption',
        'demo_sfdx_mulesoft',
        'demo_volvo_trust',
        'demo_dubsmash'
        // ,
        // 'demo_rviot'
    ],

    fy20plays: ['demo_employeeengagement', 'demo_custExp', 'demo_departmental', 'demo_devexp'],

    df18campground: [
        'demo_volvo_low_code',
        'demo_volvo_lea',
        'demo_volvo_iot',
        'demo_dubsmash',
        'demo_volvo_trust',
        'demo_align_heroku',
        'demo_sfdx_mulesoft'
    ],

    cpq: ['cpq'],

    AAHOW: ['df19AAHOW'],

    brokenWorkshops: ['iot'],
    df19cg: ['app-wall', 'df19cg1', 'df19cg2', 'df19cg3', 'df19cg6']
};

export { pages, titleOverrides, adoptionHeaders };
