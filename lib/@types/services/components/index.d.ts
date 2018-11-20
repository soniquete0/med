/// <reference types="react" />
import { Dummy } from '../../components';
import * as resources from './resources';
/**
 *
 */
declare class ComponentsService {
    Types: LooseObject<string>;
    /***/
    getAllowedTypes(): string[];
    /***/
    getComponent(type: string): typeof Dummy | (() => JSX.Element);
    /***/
    getComponentResource(type: string): typeof resources.dummy;
    getForm(type: string): () => JSX.Element;
}
export default ComponentsService;
