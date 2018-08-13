/// <reference types="node" />
import { EventEmitter } from 'events';
/**
 * An object representing the individual dimensions of an amount of time.
 */
export interface ParsedTime {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
}
/**
 * An object representing the individual dimensions of an amount of time,
 * plus some alternate representations of that time and a timestamp of when this struct was created.
 */
export interface TimeStruct extends ParsedTime {
    formatted: string;
    raw: number;
    timestamp: number;
}
/**
 * Constructs a new TimeStruct with the provided number of milliseconds.
 * @param milliseconds - The value to instantiate this TimeObject with, in milliseconds.
 * @returns A populated TimeStruct object.
 */
export declare function createTimeStruct(milliseconds?: number): any;
/**
 * Formats a number of milliseconds into a string ([hh:]mm:ss).
 * @param inputMs - The number of milliseconds to format.
 * @returns  The formatted time sting.
 */
export declare function formatMilliseconds(inputMs: number): string;
/**
 * Parses a number of milliseconds into a ParsedTime object.
 * @param milliseconds - A number of milliseconds.
 * @returns An object representing each dimension of the time.
 */
export declare function parseMilliseconds(milliseconds: number): any;
/**
 * Parses a number of seconds into a ParsedTime object.
 * @param seconds - A number of seconds.
 * @returns An object representing each dimension of the time.
 */
export declare function parseSeconds(seconds: number): any;
/**
 * Parses a formatted time string into an integer of milliseconds.
 * @param timeString - The formatted time string to parse.
 * Accepts the following: hh:mm:ss.sss, hh:mm:ss, hh:mm, hh
 * @returns The parsed time string represented as milliseconds.
 */
export declare function parseTimeString(timeString: string): number;
/**
 * A timer which counts down to a specified end time.
 */
export declare class CountdownTimer extends EventEmitter {
    private readonly interval;
    constructor(endTime: number, {tickRate}?: {
        tickRate?: number;
    });
    stop(): void;
}
/**
 * A timer which counts up, with no specified end time.
 */
export declare class CountupTimer extends EventEmitter {
    private readonly interval;
    constructor({tickRate, offset}?: {
        tickRate?: number;
        offset?: number;
    });
    stop(): void;
}
