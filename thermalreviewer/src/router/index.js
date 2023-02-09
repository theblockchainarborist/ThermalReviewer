import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import ScopesView from '../views/ScopesView.vue';
import BinocularsView from '../views/BinocularsView.vue';
import MonocularsView from '../views/MonocularsView.vue';
import KnowledgeCenter from '../views/KnowledgeCenterView.vue'

import PulsarScopeView from '../views/brandViews/pulsarViews/PulsarScopeView.vue';
import PulsarBinocularsView from '../views/brandViews/pulsarViews/PulsarBinocularsView.vue';
import PulsarMonocularsView from '../views/brandViews/pulsarViews/PulsarMonocularsView.vue';

import AGMScopesView from '../views/brandViews/agmViews/AGMScopesView.vue';
import AGMBinocularsView from '../views/brandViews/agmViews/AGMBinocularsView.vue';
import AGMMonocularsView from '../views/brandViews/agmViews/AGMMonocularsView.vue';

import ATNScopesView from '../views/brandViews/atnViews/ATNScopesView.vue';
import ATNBinocularsView from '../views/brandViews/atnViews/ATNBinocularsView.vue';
import ATNMonocularsView from '../views/brandViews/atnViews/ATNMonocularsView.vue';

import TrijiconScopesView from '../views/brandViews/trijiconViews/TrijiconScopesView.vue';
import TrijiconBinocularsView from '../views/brandViews/trijiconViews/TrijiconBinocularsView.vue';
import TrijiconMonocularsView from '../views/brandViews/trijiconViews/TrijiconMonocularsView.vue';

import FLIRScopesView from '../views/brandViews/flirViews/FLIRScopesView.vue';
import FLIRBinocularsView from '../views/brandViews/flirViews/FLIRBinocularsView.vue';
import FLIRMonocularsView from '../views/brandViews/flirViews/FLIRMonocularsView.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/scopes',
        name: 'Scopes',
        component: ScopesView
    },
    {
        path: '/binoculars',
        name: 'Binoculars',
        component: BinocularsView
    },
    {
        path: '/monoculars',
        name: 'Monoculars',
        component: MonocularsView
    },
    {
        path: '/knowledge-center',
        name: 'KnowledgeCenter',
        component: KnowledgeCenter
    },

        /* Pulsar Paths */
    {
        path: '/scopes/pulsar',
        name: 'PulsarScopeView',
        component: PulsarScopeView
    },
    {
        path: '/binoculars/pulsar',
        name: 'PulsarBinocularsView',
        component: PulsarBinocularsView
    },
    {
        path: '/monoculars/pulsar',
        name: 'PulsarMonocularsView',
        component: PulsarMonocularsView
    },

        /* AGM Paths */
    {
        path: '/scopes/agm',
        name: 'AGMScopesView',
        component: AGMScopesView
    },
    {
        path: '/binoculars/agm',
        name: 'AGMBinocularsView',
        component: AGMBinocularsView
    },
    {
        path: '/monoculars/agm',
        name: 'AGMMonocularsView',
        component: AGMMonocularsView
    },

        /* ATN Paths */
    {
        path: '/scopes/atn',
        name: 'ATNScopesView',
        component: ATNScopesView
    },
    {
        path: '/binoculars/atn',
        name: 'ATNBinocularsView',
        component: ATNBinocularsView
    },
    {
        path: '/monoculars/atn',
        name: 'ATNMonocularsView',
        component: ATNMonocularsView
    },
        
        /* Trijicon Paths */
    {
        path: '/scopes/trijicon',
        name: 'TrijiconScopesView',
        component: TrijiconScopesView
    },
    {
        path: '/binoculars/trijicon',
        name: 'TrijiconBinocularsView',
        component: TrijiconBinocularsView
    },
    {
        path: '/monoculars/trijicon',
        name: 'TrijiconMonocularsView',
        component: TrijiconMonocularsView
    },

        /* FLIR Paths */
    {
        path: '/scopes/flir',
        name: 'FLIRScopesView',
        component: FLIRScopesView
    },
    {
        path: '/binoculars/flir',
        name: 'FLIRBinocularsView',
        component: FLIRBinocularsView
    },
    {
        path: '/monoculars/flir',
        name: 'FLIRMonocularsView',
        component: FLIRMonocularsView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;