import html from '../assets/svg/skills/html.svg'
import docker from '../assets/svg/skills/docker.svg'
import css from '../assets/svg/skills/css.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import nextJS from '../assets/svg/skills/nextJS.svg'
import react from '../assets/svg/skills/react.svg'
import typescript from '../assets/svg/skills/typescript.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import postgresql from '../assets/svg/skills/postgresql.svg'
import tailwind from '../assets/svg/skills/tailwind.svg'
// import c from '../assets/svg/skills/c.svg'
import cplusplus from '../assets/svg/skills/cplusplus.svg'
// import csharp from '../assets/svg/skills/csharp.svg'
// import dart from '../assets/svg/skills/dart.svg'
// import go from '../assets/svg/skills/go.svg'
import java from '../assets/svg/skills/java.svg'
// import julia from '../assets/svg/skills/julia.svg'
// import kotlin from '../assets/svg/skills/kotlin.svg'
// import matlab from '../assets/svg/skills/matlab.svg'
// import php from '../assets/svg/skills/php.svg'
import python from '../assets/svg/skills/python.svg'
// import ruby from '../assets/svg/skills/ruby.svg'
// import swift from '../assets/svg/skills/swift.svg'
// import adobeaudition from '../assets/svg/skills/adobeaudition.svg'
import aws from '../assets/svg/skills/aws.svg'
// import deno from '../assets/svg/skills/deno.svg'
// import django from '../assets/svg/skills/django.svg'
// import firebase from '../assets/svg/skills/firebase.svg'
// import gimp from '../assets/svg/skills/gimp.svg'
import git from '../assets/svg/skills/git.svg'
// import graphql from '../assets/svg/skills/graphql.svg'
// import lightroom from '../assets/svg/skills/lightroom.svg'
import materialui from '../assets/svg/skills/materialui.svg'
// import nginx from '../assets/svg/skills/nginx.svg'
import numpy from '../assets/svg/skills/numpy.svg'
// import opencv from '../assets/svg/skills/opencv.svg'
// import premierepro from '../assets/svg/skills/premierepro.svg'
// import pytorch from '../assets/svg/skills/pytorch.svg'
// import selenium from '../assets/svg/skills/selenium.svg'
// import strapi from '../assets/svg/skills/strapi.svg'
import tensorflow from '../assets/svg/skills/tensorflow.svg'
// import webix from '../assets/svg/skills/webix.svg'
// import wordpress from '../assets/svg/skills/wordpress.svg'

// import azure from '../assets/svg/skills/azure.svg'
// import blender from '../assets/svg/skills/blender.svg'
// import fastify from '../assets/svg/skills/fastify.svg'
// import figma from '../assets/svg/skills/figma.svg'
// import flutter from '../assets/svg/skills/flutter.svg'
// import haxe from '../assets/svg/skills/haxe.svg'
// import ionic from '../assets/svg/skills/ionic.svg'
// import markdown from '../assets/svg/skills/markdown.svg'
// import microsoftoffice from '../assets/svg/skills/microsoftoffice.svg'
// import picsart from '../assets/svg/skills/picsart.svg'
// import sketch from '../assets/svg/skills/sketch.svg'
// import unity from '../assets/svg/skills/unity.svg'
// import wolframalpha from '../assets/svg/skills/wolframalpha.svg'

// import canva from '../assets/svg/skills/canva.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {

        case 'html':
            return html;
        case 'docker':
            return docker;
        // case 'illustrator':
        //     return illustrator;
        // case 'adobe xd':
        //     return adobeXd;
        // case 'after effects':
        //     return afterEffects;
        case 'css':
            return css;
        // case 'angular':
        //     return angular;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'react':
            return react;
        // case 'svelte':
        //     return svelte;
        case 'typescript':
            return typescript;
        // case 'vue':
        //     return vue;
        case 'bootstrap':
            return bootstrap;
        // case 'bulma':
        //     return bulma;
        // case 'capacitorjs':
        //     return capacitorjs;
        // case 'coffeescript':
        //     return coffeescript;
        // case 'memsql':
        //     return memsql;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'tailwind':
            return tailwind;
        // case 'vitejs':
        //     return vitejs;
        // case 'vuetifyjs':
        //     return vuetifyjs;
        // case 'c':
        //     return c;
        case 'c++':
            return cplusplus;
        // case 'c#':
        //     return csharp;
        // case 'dart':
        //     return dart;
        // case 'go':
        //     return go;
        case 'java':
            return java;
        // case 'kotlin':
        //     return kotlin;
        // case 'matlab':
        //     return matlab;
        // case 'php':
        //     return php;
        case 'python':
            return python;
        // case 'ruby':
        //     return ruby;
        // case 'swift':
        //     return swift;
        case 'aws':
            return aws;
        // case 'deno':
        //     return deno;
        case 'git':
            return git;
        case 'materialui':
            return materialui;
        case 'numpy':
            return numpy;
        case 'tensorflow':
            return tensorflow;

        default:
            break;
    }
}
