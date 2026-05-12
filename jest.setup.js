import "@testing-library/jest-dom";
import { glob } from "fs";
import {TextEncoder, TextDecoder} from "util";

global.TextEncoder = TextEncoder;
glob.TextDecoder  = TextDecoder;