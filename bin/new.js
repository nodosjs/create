#!/usr/bin/env node

const path = require('path');
const { runNew } = require('@nodosjs/cli');

const relativePath = process.argv[2] || '.';
const fullPath = path.resolve(process.cwd(), relativePath);
runNew(process.cwd(), { args: ['new', fullPath] });
