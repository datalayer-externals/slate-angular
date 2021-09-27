import { ZDoc } from "./doc";
import { ZItem } from "../structs/item";

export class ZBaseType {
    _item: ZItem | null;
    _map = new Map<string, ZItem>();
    _start: ZItem | null;
    doc: ZDoc | null = null;
    _length: number;

    _integrate(doc: ZDoc, item: ZItem) {
        this.doc = doc;
        this._item = item;
    }
}