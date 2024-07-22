import type { Extension } from '@codemirror/state';
import amy from './amy.js';
import dracula from './dracula.js';

export default function themes(): Record<string, Extension | Extension[]> {
    return {amy, dracula}
};