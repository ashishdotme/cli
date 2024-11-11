#!/usr/bin/env -S deno run -A
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all2) => {
  for (var name in all2)
    __defProp(target, name, { get: all2[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// https://jsr.io/@std/fmt/0.225.6/colors.ts
var colors_exports = {};
__export(colors_exports, {
  bgBlack: () => bgBlack,
  bgBlue: () => bgBlue,
  bgBrightBlack: () => bgBrightBlack,
  bgBrightBlue: () => bgBrightBlue,
  bgBrightCyan: () => bgBrightCyan,
  bgBrightGreen: () => bgBrightGreen,
  bgBrightMagenta: () => bgBrightMagenta,
  bgBrightRed: () => bgBrightRed,
  bgBrightWhite: () => bgBrightWhite,
  bgBrightYellow: () => bgBrightYellow,
  bgCyan: () => bgCyan,
  bgGreen: () => bgGreen,
  bgMagenta: () => bgMagenta,
  bgRed: () => bgRed,
  bgRgb24: () => bgRgb24,
  bgRgb8: () => bgRgb8,
  bgWhite: () => bgWhite,
  bgYellow: () => bgYellow,
  black: () => black,
  blue: () => blue,
  bold: () => bold,
  brightBlack: () => brightBlack,
  brightBlue: () => brightBlue,
  brightCyan: () => brightCyan,
  brightGreen: () => brightGreen,
  brightMagenta: () => brightMagenta,
  brightRed: () => brightRed,
  brightWhite: () => brightWhite,
  brightYellow: () => brightYellow,
  cyan: () => cyan,
  dim: () => dim,
  getColorEnabled: () => getColorEnabled,
  gray: () => gray,
  green: () => green,
  hidden: () => hidden,
  inverse: () => inverse,
  italic: () => italic,
  magenta: () => magenta,
  red: () => red,
  reset: () => reset,
  rgb24: () => rgb24,
  rgb8: () => rgb8,
  setColorEnabled: () => setColorEnabled,
  strikethrough: () => strikethrough,
  stripAnsiCode: () => stripAnsiCode,
  stripColor: () => stripColor,
  underline: () => underline,
  white: () => white,
  yellow: () => yellow
});
function setColorEnabled(value) {
  if (Deno2?.noColor) {
    return;
  }
  enabled = value;
}
function getColorEnabled() {
  return enabled;
}
function code(open, close) {
  return {
    open: `\x1B[${open.join(";")}m`,
    close: `\x1B[${close}m`,
    regexp: new RegExp(`\\x1b\\[${close}m`, "g")
  };
}
function run(str, code3) {
  return enabled ? `${code3.open}${str.replace(code3.regexp, code3.open)}${code3.close}` : str;
}
function reset(str) {
  return run(str, code([0], 0));
}
function bold(str) {
  return run(str, code([1], 22));
}
function dim(str) {
  return run(str, code([2], 22));
}
function italic(str) {
  return run(str, code([3], 23));
}
function underline(str) {
  return run(str, code([4], 24));
}
function inverse(str) {
  return run(str, code([7], 27));
}
function hidden(str) {
  return run(str, code([8], 28));
}
function strikethrough(str) {
  return run(str, code([9], 29));
}
function black(str) {
  return run(str, code([30], 39));
}
function red(str) {
  return run(str, code([31], 39));
}
function green(str) {
  return run(str, code([32], 39));
}
function yellow(str) {
  return run(str, code([33], 39));
}
function blue(str) {
  return run(str, code([34], 39));
}
function magenta(str) {
  return run(str, code([35], 39));
}
function cyan(str) {
  return run(str, code([36], 39));
}
function white(str) {
  return run(str, code([37], 39));
}
function gray(str) {
  return brightBlack(str);
}
function brightBlack(str) {
  return run(str, code([90], 39));
}
function brightRed(str) {
  return run(str, code([91], 39));
}
function brightGreen(str) {
  return run(str, code([92], 39));
}
function brightYellow(str) {
  return run(str, code([93], 39));
}
function brightBlue(str) {
  return run(str, code([94], 39));
}
function brightMagenta(str) {
  return run(str, code([95], 39));
}
function brightCyan(str) {
  return run(str, code([96], 39));
}
function brightWhite(str) {
  return run(str, code([97], 39));
}
function bgBlack(str) {
  return run(str, code([40], 49));
}
function bgRed(str) {
  return run(str, code([41], 49));
}
function bgGreen(str) {
  return run(str, code([42], 49));
}
function bgYellow(str) {
  return run(str, code([43], 49));
}
function bgBlue(str) {
  return run(str, code([44], 49));
}
function bgMagenta(str) {
  return run(str, code([45], 49));
}
function bgCyan(str) {
  return run(str, code([46], 49));
}
function bgWhite(str) {
  return run(str, code([47], 49));
}
function bgBrightBlack(str) {
  return run(str, code([100], 49));
}
function bgBrightRed(str) {
  return run(str, code([101], 49));
}
function bgBrightGreen(str) {
  return run(str, code([102], 49));
}
function bgBrightYellow(str) {
  return run(str, code([103], 49));
}
function bgBrightBlue(str) {
  return run(str, code([104], 49));
}
function bgBrightMagenta(str) {
  return run(str, code([105], 49));
}
function bgBrightCyan(str) {
  return run(str, code([106], 49));
}
function bgBrightWhite(str) {
  return run(str, code([107], 49));
}
function clampAndTruncate(n, max = 255, min = 0) {
  return Math.trunc(Math.max(Math.min(n, max), min));
}
function rgb8(str, color) {
  return run(str, code([38, 5, clampAndTruncate(color)], 39));
}
function bgRgb8(str, color) {
  return run(str, code([48, 5, clampAndTruncate(color)], 49));
}
function rgb24(str, color) {
  if (typeof color === "number") {
    return run(
      str,
      code(
        [38, 2, color >> 16 & 255, color >> 8 & 255, color & 255],
        39
      )
    );
  }
  return run(
    str,
    code(
      [
        38,
        2,
        clampAndTruncate(color.r),
        clampAndTruncate(color.g),
        clampAndTruncate(color.b)
      ],
      39
    )
  );
}
function bgRgb24(str, color) {
  if (typeof color === "number") {
    return run(
      str,
      code(
        [48, 2, color >> 16 & 255, color >> 8 & 255, color & 255],
        49
      )
    );
  }
  return run(
    str,
    code(
      [
        48,
        2,
        clampAndTruncate(color.r),
        clampAndTruncate(color.g),
        clampAndTruncate(color.b)
      ],
      49
    )
  );
}
function stripColor(string2) {
  return stripAnsiCode(string2);
}
function stripAnsiCode(string2) {
  return string2.replace(ANSI_PATTERN, "");
}
var Deno2, noColor, enabled, ANSI_PATTERN;
var init_colors = __esm({
  "https://jsr.io/@std/fmt/0.225.6/colors.ts"() {
    ({ Deno: Deno2 } = globalThis);
    noColor = typeof Deno2?.noColor === "boolean" ? Deno2.noColor : false;
    enabled = !noColor;
    ANSI_PATTERN = new RegExp(
      [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TXZcf-nq-uy=><~]))"
      ].join("|"),
      "g"
    );
  }
});

// https://jsr.io/@cliffy/command/1.0.0-rc.5/upgrade/runtime.ts
var Runtime;
var init_runtime = __esm({
  "https://jsr.io/@cliffy/command/1.0.0-rc.5/upgrade/runtime.ts"() {
    Runtime = class {
    };
  }
});

// https://jsr.io/@cliffy/command/1.0.0-rc.5/upgrade/runtime/deno_runtime.ts
var deno_runtime_exports = {};
__export(deno_runtime_exports, {
  DenoRuntime: () => DenoRuntime
});
var DenoRuntime;
var init_deno_runtime = __esm({
  "https://jsr.io/@cliffy/command/1.0.0-rc.5/upgrade/runtime/deno_runtime.ts"() {
    init_colors();
    init_runtime();
    DenoRuntime = class extends Runtime {
      async upgrade({ provider, name, main: main2, to, importMap, verbose, logger, args = [] }) {
        const specifier = provider.getSpecifier(name, to, main2);
        const cmdArgs = ["install", `--name=${name}`, "--global", "--force"];
        if (!verbose) {
          cmdArgs.push("--quiet");
        }
        if (args.length) {
          cmdArgs.push(...args);
        }
        if (importMap) {
          const importJson = new URL(importMap, specifier).href;
          cmdArgs.push(`--import-map=${importJson}`);
        }
        cmdArgs.push(specifier);
        await this.execute(cmdArgs, logger);
      }
      async execute(cmdArgs, logger) {
        logger?.log(
          dim("$ %s %s"),
          Deno.execPath(),
          cmdArgs.join(" ")
        );
        const cmd = new Deno.Command(Deno.execPath(), {
          args: cmdArgs,
          stdout: "piped",
          stderr: "piped"
        });
        const { success, stderr } = await cmd.output();
        if (!success) {
          throw new Error(new TextDecoder().decode(stderr).trim());
        }
      }
    };
  }
});

// https://jsr.io/@cliffy/command/1.0.0-rc.5/upgrade/runtime/node_runtime.ts
var node_runtime_exports = {};
__export(node_runtime_exports, {
  NodeRuntime: () => NodeRuntime
});
var NodeRuntime;
var init_node_runtime = __esm({
  "https://jsr.io/@cliffy/command/1.0.0-rc.5/upgrade/runtime/node_runtime.ts"() {
    init_colors();
    NodeRuntime = class {
      upgrade({
        provider,
        name,
        main: main2,
        to,
        verbose,
        logger,
        args = []
      }) {
        const specifier = provider.getSpecifier(name, to, main2).replace(/^(npm|jsr):/, "");
        const isJsr = provider.name === "jsr";
        const cmdArgs = ["install", "--global", "--force"];
        if (!verbose) {
          cmdArgs.push("--silent");
        }
        if (args.length) {
          cmdArgs.push(...args);
        }
        cmdArgs.push(specifier);
        return this.execute(cmdArgs, isJsr, logger);
      }
      async execute(cmdArgs, isJsr, logger) {
        const { spawn } = await import("node:child_process");
        const [bin, args] = isJsr ? ["npx", ["jsr", ...cmdArgs]] : ["npm", cmdArgs];
        logger?.log(
          dim("$ %s %s %s"),
          bin,
          args.join(" ")
        );
        const proc = spawn(bin, args, { stdio: [null, "pipe", "pipe"] });
        const stderr = [];
        proc.stderr?.on("data", (data) => stderr.push(data.toString()));
        const exitCode = await new Promise(
          (resolve4) => proc.on("close", resolve4)
        );
        if (exitCode) {
          throw new Error(stderr.join("\n").trim());
        }
      }
    };
  }
});

// https://jsr.io/@cliffy/command/1.0.0-rc.5/upgrade/runtime/bun_runtime.ts
var bun_runtime_exports = {};
__export(bun_runtime_exports, {
  BunRuntime: () => BunRuntime
});
var BunRuntime;
var init_bun_runtime = __esm({
  "https://jsr.io/@cliffy/command/1.0.0-rc.5/upgrade/runtime/bun_runtime.ts"() {
    init_colors();
    init_node_runtime();
    BunRuntime = class extends NodeRuntime {
      async execute(cmdArgs, isJsr, logger) {
        const Bun = globalThis.Bun;
        const process = globalThis.process;
        cmdArgs = isJsr ? [`${process.execPath}x`, "jsr", ...cmdArgs] : [process.execPath, ...cmdArgs];
        logger?.log(
          dim("$ %s"),
          cmdArgs.join(" ")
        );
        const proc = Bun.spawn(cmdArgs, { stdout: "pipe", stderr: "pipe" });
        await proc.exited;
        if (proc.exitCode) {
          const stderr = await new Response(proc.stderr).text();
          throw new Error(stderr.trim());
        }
      }
    };
  }
});

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/highlight.js@11.9.0/node_modules/highlight.js/lib/core.js
var require_core = __commonJS({
  "../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/highlight.js@11.9.0/node_modules/highlight.js/lib/core.js"(exports, module) {
    function deepFreeze(obj) {
      if (obj instanceof Map) {
        obj.clear = obj.delete = obj.set = function() {
          throw new Error("map is read-only");
        };
      } else if (obj instanceof Set) {
        obj.add = obj.clear = obj.delete = function() {
          throw new Error("set is read-only");
        };
      }
      Object.freeze(obj);
      Object.getOwnPropertyNames(obj).forEach((name) => {
        const prop = obj[name];
        const type = typeof prop;
        if ((type === "object" || type === "function") && !Object.isFrozen(prop)) {
          deepFreeze(prop);
        }
      });
      return obj;
    }
    var Response2 = class {
      /**
       * @param {CompiledMode} mode
       */
      constructor(mode) {
        if (mode.data === void 0)
          mode.data = {};
        this.data = mode.data;
        this.isMatchIgnored = false;
      }
      ignoreMatch() {
        this.isMatchIgnored = true;
      }
    };
    function escapeHTML(value) {
      return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
    }
    function inherit$1(original, ...objects) {
      const result = /* @__PURE__ */ Object.create(null);
      for (const key in original) {
        result[key] = original[key];
      }
      objects.forEach(function(obj) {
        for (const key in obj) {
          result[key] = obj[key];
        }
      });
      return (
        /** @type {T} */
        result
      );
    }
    var SPAN_CLOSE = "</span>";
    var emitsWrappingTags = (node) => {
      return !!node.scope;
    };
    var scopeToCSSClass = (name, { prefix }) => {
      if (name.startsWith("language:")) {
        return name.replace("language:", "language-");
      }
      if (name.includes(".")) {
        const pieces = name.split(".");
        return [
          `${prefix}${pieces.shift()}`,
          ...pieces.map((x, i) => `${x}${"_".repeat(i + 1)}`)
        ].join(" ");
      }
      return `${prefix}${name}`;
    };
    var HTMLRenderer = class {
      /**
       * Creates a new HTMLRenderer
       *
       * @param {Tree} parseTree - the parse tree (must support `walk` API)
       * @param {{classPrefix: string}} options
       */
      constructor(parseTree, options) {
        this.buffer = "";
        this.classPrefix = options.classPrefix;
        parseTree.walk(this);
      }
      /**
       * Adds texts to the output stream
       *
       * @param {string} text */
      addText(text) {
        this.buffer += escapeHTML(text);
      }
      /**
       * Adds a node open to the output stream (if needed)
       *
       * @param {Node} node */
      openNode(node) {
        if (!emitsWrappingTags(node))
          return;
        const className = scopeToCSSClass(
          node.scope,
          { prefix: this.classPrefix }
        );
        this.span(className);
      }
      /**
       * Adds a node close to the output stream (if needed)
       *
       * @param {Node} node */
      closeNode(node) {
        if (!emitsWrappingTags(node))
          return;
        this.buffer += SPAN_CLOSE;
      }
      /**
       * returns the accumulated buffer
      */
      value() {
        return this.buffer;
      }
      // helpers
      /**
       * Builds a span element
       *
       * @param {string} className */
      span(className) {
        this.buffer += `<span class="${className}">`;
      }
    };
    var newNode = (opts = {}) => {
      const result = { children: [] };
      Object.assign(result, opts);
      return result;
    };
    var TokenTree = class _TokenTree {
      constructor() {
        this.rootNode = newNode();
        this.stack = [this.rootNode];
      }
      get top() {
        return this.stack[this.stack.length - 1];
      }
      get root() {
        return this.rootNode;
      }
      /** @param {Node} node */
      add(node) {
        this.top.children.push(node);
      }
      /** @param {string} scope */
      openNode(scope) {
        const node = newNode({ scope });
        this.add(node);
        this.stack.push(node);
      }
      closeNode() {
        if (this.stack.length > 1) {
          return this.stack.pop();
        }
        return void 0;
      }
      closeAllNodes() {
        while (this.closeNode())
          ;
      }
      toJSON() {
        return JSON.stringify(this.rootNode, null, 4);
      }
      /**
       * @typedef { import("./html_renderer").Renderer } Renderer
       * @param {Renderer} builder
       */
      walk(builder) {
        return this.constructor._walk(builder, this.rootNode);
      }
      /**
       * @param {Renderer} builder
       * @param {Node} node
       */
      static _walk(builder, node) {
        if (typeof node === "string") {
          builder.addText(node);
        } else if (node.children) {
          builder.openNode(node);
          node.children.forEach((child) => this._walk(builder, child));
          builder.closeNode(node);
        }
        return builder;
      }
      /**
       * @param {Node} node
       */
      static _collapse(node) {
        if (typeof node === "string")
          return;
        if (!node.children)
          return;
        if (node.children.every((el) => typeof el === "string")) {
          node.children = [node.children.join("")];
        } else {
          node.children.forEach((child) => {
            _TokenTree._collapse(child);
          });
        }
      }
    };
    var TokenTreeEmitter = class extends TokenTree {
      /**
       * @param {*} options
       */
      constructor(options) {
        super();
        this.options = options;
      }
      /**
       * @param {string} text
       */
      addText(text) {
        if (text === "") {
          return;
        }
        this.add(text);
      }
      /** @param {string} scope */
      startScope(scope) {
        this.openNode(scope);
      }
      endScope() {
        this.closeNode();
      }
      /**
       * @param {Emitter & {root: DataNode}} emitter
       * @param {string} name
       */
      __addSublanguage(emitter, name) {
        const node = emitter.root;
        if (name)
          node.scope = `language:${name}`;
        this.add(node);
      }
      toHTML() {
        const renderer = new HTMLRenderer(this, this.options);
        return renderer.value();
      }
      finalize() {
        this.closeAllNodes();
        return true;
      }
    };
    function source(re) {
      if (!re)
        return null;
      if (typeof re === "string")
        return re;
      return re.source;
    }
    function lookahead(re) {
      return concat("(?=", re, ")");
    }
    function anyNumberOfTimes(re) {
      return concat("(?:", re, ")*");
    }
    function optional(re) {
      return concat("(?:", re, ")?");
    }
    function concat(...args) {
      const joined = args.map((x) => source(x)).join("");
      return joined;
    }
    function stripOptionsFromArgs(args) {
      const opts = args[args.length - 1];
      if (typeof opts === "object" && opts.constructor === Object) {
        args.splice(args.length - 1, 1);
        return opts;
      } else {
        return {};
      }
    }
    function either(...args) {
      const opts = stripOptionsFromArgs(args);
      const joined = "(" + (opts.capture ? "" : "?:") + args.map((x) => source(x)).join("|") + ")";
      return joined;
    }
    function countMatchGroups(re) {
      return new RegExp(re.toString() + "|").exec("").length - 1;
    }
    function startsWith(re, lexeme) {
      const match2 = re && re.exec(lexeme);
      return match2 && match2.index === 0;
    }
    var BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
    function _rewriteBackreferences(regexps, { joinWith }) {
      let numCaptures = 0;
      return regexps.map((regex) => {
        numCaptures += 1;
        const offset = numCaptures;
        let re = source(regex);
        let out = "";
        while (re.length > 0) {
          const match2 = BACKREF_RE.exec(re);
          if (!match2) {
            out += re;
            break;
          }
          out += re.substring(0, match2.index);
          re = re.substring(match2.index + match2[0].length);
          if (match2[0][0] === "\\" && match2[1]) {
            out += "\\" + String(Number(match2[1]) + offset);
          } else {
            out += match2[0];
            if (match2[0] === "(") {
              numCaptures++;
            }
          }
        }
        return out;
      }).map((re) => `(${re})`).join(joinWith);
    }
    var MATCH_NOTHING_RE = /\b\B/;
    var IDENT_RE = "[a-zA-Z]\\w*";
    var UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*";
    var NUMBER_RE = "\\b\\d+(\\.\\d+)?";
    var C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
    var BINARY_NUMBER_RE = "\\b(0b[01]+)";
    var RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
    var SHEBANG = (opts = {}) => {
      const beginShebang = /^#![ ]*\//;
      if (opts.binary) {
        opts.begin = concat(
          beginShebang,
          /.*\b/,
          opts.binary,
          /\b.*/
        );
      }
      return inherit$1({
        scope: "meta",
        begin: beginShebang,
        end: /$/,
        relevance: 0,
        /** @type {ModeCallback} */
        "on:begin": (m, resp) => {
          if (m.index !== 0)
            resp.ignoreMatch();
        }
      }, opts);
    };
    var BACKSLASH_ESCAPE = {
      begin: "\\\\[\\s\\S]",
      relevance: 0
    };
    var APOS_STRING_MODE = {
      scope: "string",
      begin: "'",
      end: "'",
      illegal: "\\n",
      contains: [BACKSLASH_ESCAPE]
    };
    var QUOTE_STRING_MODE = {
      scope: "string",
      begin: '"',
      end: '"',
      illegal: "\\n",
      contains: [BACKSLASH_ESCAPE]
    };
    var PHRASAL_WORDS_MODE = {
      begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
    };
    var COMMENT = function(begin, end, modeOptions = {}) {
      const mode = inherit$1(
        {
          scope: "comment",
          begin,
          end,
          contains: []
        },
        modeOptions
      );
      mode.contains.push({
        scope: "doctag",
        // hack to avoid the space from being included. the space is necessary to
        // match here to prevent the plain text rule below from gobbling up doctags
        begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
        end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
        excludeBegin: true,
        relevance: 0
      });
      const ENGLISH_WORD = either(
        // list of common 1 and 2 letter words in English
        "I",
        "a",
        "is",
        "so",
        "us",
        "to",
        "at",
        "if",
        "in",
        "it",
        "on",
        // note: this is not an exhaustive list of contractions, just popular ones
        /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
        // contractions - can't we'd they're let's, etc
        /[A-Za-z]+[-][a-z]+/,
        // `no-way`, etc.
        /[A-Za-z][a-z]{2,}/
        // allow capitalized words at beginning of sentences
      );
      mode.contains.push(
        {
          // TODO: how to include ", (, ) without breaking grammars that use these for
          // comment delimiters?
          // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
          // ---
          // this tries to find sequences of 3 english words in a row (without any
          // "programming" type syntax) this gives us a strong signal that we've
          // TRULY found a comment - vs perhaps scanning with the wrong language.
          // It's possible to find something that LOOKS like the start of the
          // comment - but then if there is no readable text - good chance it is a
          // false match and not a comment.
          //
          // for a visual example please see:
          // https://github.com/highlightjs/highlight.js/issues/2827
          begin: concat(
            /[ ]+/,
            // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
            "(",
            ENGLISH_WORD,
            /[.]?[:]?([.][ ]|[ ])/,
            "){3}"
          )
          // look for 3 words in a row
        }
      );
      return mode;
    };
    var C_LINE_COMMENT_MODE = COMMENT("//", "$");
    var C_BLOCK_COMMENT_MODE = COMMENT("/\\*", "\\*/");
    var HASH_COMMENT_MODE = COMMENT("#", "$");
    var NUMBER_MODE = {
      scope: "number",
      begin: NUMBER_RE,
      relevance: 0
    };
    var C_NUMBER_MODE = {
      scope: "number",
      begin: C_NUMBER_RE,
      relevance: 0
    };
    var BINARY_NUMBER_MODE = {
      scope: "number",
      begin: BINARY_NUMBER_RE,
      relevance: 0
    };
    var REGEXP_MODE = {
      scope: "regexp",
      begin: /\/(?=[^/\n]*\/)/,
      end: /\/[gimuy]*/,
      contains: [
        BACKSLASH_ESCAPE,
        {
          begin: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [BACKSLASH_ESCAPE]
        }
      ]
    };
    var TITLE_MODE = {
      scope: "title",
      begin: IDENT_RE,
      relevance: 0
    };
    var UNDERSCORE_TITLE_MODE = {
      scope: "title",
      begin: UNDERSCORE_IDENT_RE,
      relevance: 0
    };
    var METHOD_GUARD = {
      // excludes method names from keyword processing
      begin: "\\.\\s*" + UNDERSCORE_IDENT_RE,
      relevance: 0
    };
    var END_SAME_AS_BEGIN = function(mode) {
      return Object.assign(
        mode,
        {
          /** @type {ModeCallback} */
          "on:begin": (m, resp) => {
            resp.data._beginMatch = m[1];
          },
          /** @type {ModeCallback} */
          "on:end": (m, resp) => {
            if (resp.data._beginMatch !== m[1])
              resp.ignoreMatch();
          }
        }
      );
    };
    var MODES = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      APOS_STRING_MODE,
      BACKSLASH_ESCAPE,
      BINARY_NUMBER_MODE,
      BINARY_NUMBER_RE,
      COMMENT,
      C_BLOCK_COMMENT_MODE,
      C_LINE_COMMENT_MODE,
      C_NUMBER_MODE,
      C_NUMBER_RE,
      END_SAME_AS_BEGIN,
      HASH_COMMENT_MODE,
      IDENT_RE,
      MATCH_NOTHING_RE,
      METHOD_GUARD,
      NUMBER_MODE,
      NUMBER_RE,
      PHRASAL_WORDS_MODE,
      QUOTE_STRING_MODE,
      REGEXP_MODE,
      RE_STARTERS_RE,
      SHEBANG,
      TITLE_MODE,
      UNDERSCORE_IDENT_RE,
      UNDERSCORE_TITLE_MODE
    });
    function skipIfHasPrecedingDot(match2, response) {
      const before = match2.input[match2.index - 1];
      if (before === ".") {
        response.ignoreMatch();
      }
    }
    function scopeClassName(mode, _parent) {
      if (mode.className !== void 0) {
        mode.scope = mode.className;
        delete mode.className;
      }
    }
    function beginKeywords(mode, parent) {
      if (!parent)
        return;
      if (!mode.beginKeywords)
        return;
      mode.begin = "\\b(" + mode.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)";
      mode.__beforeBegin = skipIfHasPrecedingDot;
      mode.keywords = mode.keywords || mode.beginKeywords;
      delete mode.beginKeywords;
      if (mode.relevance === void 0)
        mode.relevance = 0;
    }
    function compileIllegal(mode, _parent) {
      if (!Array.isArray(mode.illegal))
        return;
      mode.illegal = either(...mode.illegal);
    }
    function compileMatch(mode, _parent) {
      if (!mode.match)
        return;
      if (mode.begin || mode.end)
        throw new Error("begin & end are not supported with match");
      mode.begin = mode.match;
      delete mode.match;
    }
    function compileRelevance(mode, _parent) {
      if (mode.relevance === void 0)
        mode.relevance = 1;
    }
    var beforeMatchExt = (mode, parent) => {
      if (!mode.beforeMatch)
        return;
      if (mode.starts)
        throw new Error("beforeMatch cannot be used with starts");
      const originalMode = Object.assign({}, mode);
      Object.keys(mode).forEach((key) => {
        delete mode[key];
      });
      mode.keywords = originalMode.keywords;
      mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
      mode.starts = {
        relevance: 0,
        contains: [
          Object.assign(originalMode, { endsParent: true })
        ]
      };
      mode.relevance = 0;
      delete originalMode.beforeMatch;
    };
    var COMMON_KEYWORDS = [
      "of",
      "and",
      "for",
      "in",
      "not",
      "or",
      "if",
      "then",
      "parent",
      // common variable name
      "list",
      // common variable name
      "value"
      // common variable name
    ];
    var DEFAULT_KEYWORD_SCOPE = "keyword";
    function compileKeywords(rawKeywords, caseInsensitive, scopeName = DEFAULT_KEYWORD_SCOPE) {
      const compiledKeywords = /* @__PURE__ */ Object.create(null);
      if (typeof rawKeywords === "string") {
        compileList(scopeName, rawKeywords.split(" "));
      } else if (Array.isArray(rawKeywords)) {
        compileList(scopeName, rawKeywords);
      } else {
        Object.keys(rawKeywords).forEach(function(scopeName2) {
          Object.assign(
            compiledKeywords,
            compileKeywords(rawKeywords[scopeName2], caseInsensitive, scopeName2)
          );
        });
      }
      return compiledKeywords;
      function compileList(scopeName2, keywordList) {
        if (caseInsensitive) {
          keywordList = keywordList.map((x) => x.toLowerCase());
        }
        keywordList.forEach(function(keyword) {
          const pair = keyword.split("|");
          compiledKeywords[pair[0]] = [scopeName2, scoreForKeyword(pair[0], pair[1])];
        });
      }
    }
    function scoreForKeyword(keyword, providedScore) {
      if (providedScore) {
        return Number(providedScore);
      }
      return commonKeyword(keyword) ? 0 : 1;
    }
    function commonKeyword(keyword) {
      return COMMON_KEYWORDS.includes(keyword.toLowerCase());
    }
    var seenDeprecations = {};
    var error6 = (message2) => {
      console.error(message2);
    };
    var warn6 = (message2, ...args) => {
      console.log(`WARN: ${message2}`, ...args);
    };
    var deprecated = (version2, message2) => {
      if (seenDeprecations[`${version2}/${message2}`])
        return;
      console.log(`Deprecated as of ${version2}. ${message2}`);
      seenDeprecations[`${version2}/${message2}`] = true;
    };
    var MultiClassError = new Error();
    function remapScopeNames(mode, regexes, { key }) {
      let offset = 0;
      const scopeNames = mode[key];
      const emit = {};
      const positions = {};
      for (let i = 1; i <= regexes.length; i++) {
        positions[i + offset] = scopeNames[i];
        emit[i + offset] = true;
        offset += countMatchGroups(regexes[i - 1]);
      }
      mode[key] = positions;
      mode[key]._emit = emit;
      mode[key]._multi = true;
    }
    function beginMultiClass(mode) {
      if (!Array.isArray(mode.begin))
        return;
      if (mode.skip || mode.excludeBegin || mode.returnBegin) {
        error6("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
        throw MultiClassError;
      }
      if (typeof mode.beginScope !== "object" || mode.beginScope === null) {
        error6("beginScope must be object");
        throw MultiClassError;
      }
      remapScopeNames(mode, mode.begin, { key: "beginScope" });
      mode.begin = _rewriteBackreferences(mode.begin, { joinWith: "" });
    }
    function endMultiClass(mode) {
      if (!Array.isArray(mode.end))
        return;
      if (mode.skip || mode.excludeEnd || mode.returnEnd) {
        error6("skip, excludeEnd, returnEnd not compatible with endScope: {}");
        throw MultiClassError;
      }
      if (typeof mode.endScope !== "object" || mode.endScope === null) {
        error6("endScope must be object");
        throw MultiClassError;
      }
      remapScopeNames(mode, mode.end, { key: "endScope" });
      mode.end = _rewriteBackreferences(mode.end, { joinWith: "" });
    }
    function scopeSugar(mode) {
      if (mode.scope && typeof mode.scope === "object" && mode.scope !== null) {
        mode.beginScope = mode.scope;
        delete mode.scope;
      }
    }
    function MultiClass(mode) {
      scopeSugar(mode);
      if (typeof mode.beginScope === "string") {
        mode.beginScope = { _wrap: mode.beginScope };
      }
      if (typeof mode.endScope === "string") {
        mode.endScope = { _wrap: mode.endScope };
      }
      beginMultiClass(mode);
      endMultiClass(mode);
    }
    function compileLanguage(language) {
      function langRe(value, global) {
        return new RegExp(
          source(value),
          "m" + (language.case_insensitive ? "i" : "") + (language.unicodeRegex ? "u" : "") + (global ? "g" : "")
        );
      }
      class MultiRegex {
        constructor() {
          this.matchIndexes = {};
          this.regexes = [];
          this.matchAt = 1;
          this.position = 0;
        }
        // @ts-ignore
        addRule(re, opts) {
          opts.position = this.position++;
          this.matchIndexes[this.matchAt] = opts;
          this.regexes.push([opts, re]);
          this.matchAt += countMatchGroups(re) + 1;
        }
        compile() {
          if (this.regexes.length === 0) {
            this.exec = () => null;
          }
          const terminators = this.regexes.map((el) => el[1]);
          this.matcherRe = langRe(_rewriteBackreferences(terminators, { joinWith: "|" }), true);
          this.lastIndex = 0;
        }
        /** @param {string} s */
        exec(s) {
          this.matcherRe.lastIndex = this.lastIndex;
          const match2 = this.matcherRe.exec(s);
          if (!match2) {
            return null;
          }
          const i = match2.findIndex((el, i2) => i2 > 0 && el !== void 0);
          const matchData = this.matchIndexes[i];
          match2.splice(0, i);
          return Object.assign(match2, matchData);
        }
      }
      class ResumableMultiRegex {
        constructor() {
          this.rules = [];
          this.multiRegexes = [];
          this.count = 0;
          this.lastIndex = 0;
          this.regexIndex = 0;
        }
        // @ts-ignore
        getMatcher(index) {
          if (this.multiRegexes[index])
            return this.multiRegexes[index];
          const matcher = new MultiRegex();
          this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));
          matcher.compile();
          this.multiRegexes[index] = matcher;
          return matcher;
        }
        resumingScanAtSamePosition() {
          return this.regexIndex !== 0;
        }
        considerAll() {
          this.regexIndex = 0;
        }
        // @ts-ignore
        addRule(re, opts) {
          this.rules.push([re, opts]);
          if (opts.type === "begin")
            this.count++;
        }
        /** @param {string} s */
        exec(s) {
          const m = this.getMatcher(this.regexIndex);
          m.lastIndex = this.lastIndex;
          let result = m.exec(s);
          if (this.resumingScanAtSamePosition()) {
            if (result && result.index === this.lastIndex)
              ;
            else {
              const m2 = this.getMatcher(0);
              m2.lastIndex = this.lastIndex + 1;
              result = m2.exec(s);
            }
          }
          if (result) {
            this.regexIndex += result.position + 1;
            if (this.regexIndex === this.count) {
              this.considerAll();
            }
          }
          return result;
        }
      }
      function buildModeRegex(mode) {
        const mm = new ResumableMultiRegex();
        mode.contains.forEach((term) => mm.addRule(term.begin, { rule: term, type: "begin" }));
        if (mode.terminatorEnd) {
          mm.addRule(mode.terminatorEnd, { type: "end" });
        }
        if (mode.illegal) {
          mm.addRule(mode.illegal, { type: "illegal" });
        }
        return mm;
      }
      function compileMode(mode, parent) {
        const cmode = (
          /** @type CompiledMode */
          mode
        );
        if (mode.isCompiled)
          return cmode;
        [
          scopeClassName,
          // do this early so compiler extensions generally don't have to worry about
          // the distinction between match/begin
          compileMatch,
          MultiClass,
          beforeMatchExt
        ].forEach((ext) => ext(mode, parent));
        language.compilerExtensions.forEach((ext) => ext(mode, parent));
        mode.__beforeBegin = null;
        [
          beginKeywords,
          // do this later so compiler extensions that come earlier have access to the
          // raw array if they wanted to perhaps manipulate it, etc.
          compileIllegal,
          // default to 1 relevance if not specified
          compileRelevance
        ].forEach((ext) => ext(mode, parent));
        mode.isCompiled = true;
        let keywordPattern = null;
        if (typeof mode.keywords === "object" && mode.keywords.$pattern) {
          mode.keywords = Object.assign({}, mode.keywords);
          keywordPattern = mode.keywords.$pattern;
          delete mode.keywords.$pattern;
        }
        keywordPattern = keywordPattern || /\w+/;
        if (mode.keywords) {
          mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
        }
        cmode.keywordPatternRe = langRe(keywordPattern, true);
        if (parent) {
          if (!mode.begin)
            mode.begin = /\B|\b/;
          cmode.beginRe = langRe(cmode.begin);
          if (!mode.end && !mode.endsWithParent)
            mode.end = /\B|\b/;
          if (mode.end)
            cmode.endRe = langRe(cmode.end);
          cmode.terminatorEnd = source(cmode.end) || "";
          if (mode.endsWithParent && parent.terminatorEnd) {
            cmode.terminatorEnd += (mode.end ? "|" : "") + parent.terminatorEnd;
          }
        }
        if (mode.illegal)
          cmode.illegalRe = langRe(
            /** @type {RegExp | string} */
            mode.illegal
          );
        if (!mode.contains)
          mode.contains = [];
        mode.contains = [].concat(...mode.contains.map(function(c) {
          return expandOrCloneMode(c === "self" ? mode : c);
        }));
        mode.contains.forEach(function(c) {
          compileMode(
            /** @type Mode */
            c,
            cmode
          );
        });
        if (mode.starts) {
          compileMode(mode.starts, parent);
        }
        cmode.matcher = buildModeRegex(cmode);
        return cmode;
      }
      if (!language.compilerExtensions)
        language.compilerExtensions = [];
      if (language.contains && language.contains.includes("self")) {
        throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      }
      language.classNameAliases = inherit$1(language.classNameAliases || {});
      return compileMode(
        /** @type Mode */
        language
      );
    }
    function dependencyOnParent(mode) {
      if (!mode)
        return false;
      return mode.endsWithParent || dependencyOnParent(mode.starts);
    }
    function expandOrCloneMode(mode) {
      if (mode.variants && !mode.cachedVariants) {
        mode.cachedVariants = mode.variants.map(function(variant) {
          return inherit$1(mode, { variants: null }, variant);
        });
      }
      if (mode.cachedVariants) {
        return mode.cachedVariants;
      }
      if (dependencyOnParent(mode)) {
        return inherit$1(mode, { starts: mode.starts ? inherit$1(mode.starts) : null });
      }
      if (Object.isFrozen(mode)) {
        return inherit$1(mode);
      }
      return mode;
    }
    var version = "11.9.0";
    var HTMLInjectionError = class extends Error {
      constructor(reason, html) {
        super(reason);
        this.name = "HTMLInjectionError";
        this.html = html;
      }
    };
    var escape = escapeHTML;
    var inherit = inherit$1;
    var NO_MATCH = Symbol("nomatch");
    var MAX_KEYWORD_HITS = 7;
    var HLJS = function(hljs) {
      const languages = /* @__PURE__ */ Object.create(null);
      const aliases = /* @__PURE__ */ Object.create(null);
      const plugins = [];
      let SAFE_MODE = true;
      const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
      const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: "Plain text", contains: [] };
      let options = {
        ignoreUnescapedHTML: false,
        throwUnescapedHTML: false,
        noHighlightRe: /^(no-?highlight)$/i,
        languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
        classPrefix: "hljs-",
        cssSelector: "pre code",
        languages: null,
        // beta configuration options, subject to change, welcome to discuss
        // https://github.com/highlightjs/highlight.js/issues/1086
        __emitter: TokenTreeEmitter
      };
      function shouldNotHighlight(languageName) {
        return options.noHighlightRe.test(languageName);
      }
      function blockLanguage(block) {
        let classes = block.className + " ";
        classes += block.parentNode ? block.parentNode.className : "";
        const match2 = options.languageDetectRe.exec(classes);
        if (match2) {
          const language = getLanguage(match2[1]);
          if (!language) {
            warn6(LANGUAGE_NOT_FOUND.replace("{}", match2[1]));
            warn6("Falling back to no-highlight mode for this block.", block);
          }
          return language ? match2[1] : "no-highlight";
        }
        return classes.split(/\s+/).find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
      }
      function highlight2(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
        let code3 = "";
        let languageName = "";
        if (typeof optionsOrCode === "object") {
          code3 = codeOrLanguageName;
          ignoreIllegals = optionsOrCode.ignoreIllegals;
          languageName = optionsOrCode.language;
        } else {
          deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
          deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
          languageName = codeOrLanguageName;
          code3 = optionsOrCode;
        }
        if (ignoreIllegals === void 0) {
          ignoreIllegals = true;
        }
        const context = {
          code: code3,
          language: languageName
        };
        fire("before:highlight", context);
        const result = context.result ? context.result : _highlight(context.language, context.code, ignoreIllegals);
        result.code = context.code;
        fire("after:highlight", result);
        return result;
      }
      function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
        const keywordHits = /* @__PURE__ */ Object.create(null);
        function keywordData(mode, matchText) {
          return mode.keywords[matchText];
        }
        function processKeywords() {
          if (!top.keywords) {
            emitter.addText(modeBuffer);
            return;
          }
          let lastIndex = 0;
          top.keywordPatternRe.lastIndex = 0;
          let match2 = top.keywordPatternRe.exec(modeBuffer);
          let buf = "";
          while (match2) {
            buf += modeBuffer.substring(lastIndex, match2.index);
            const word = language.case_insensitive ? match2[0].toLowerCase() : match2[0];
            const data = keywordData(top, word);
            if (data) {
              const [kind, keywordRelevance] = data;
              emitter.addText(buf);
              buf = "";
              keywordHits[word] = (keywordHits[word] || 0) + 1;
              if (keywordHits[word] <= MAX_KEYWORD_HITS)
                relevance += keywordRelevance;
              if (kind.startsWith("_")) {
                buf += match2[0];
              } else {
                const cssClass = language.classNameAliases[kind] || kind;
                emitKeyword(match2[0], cssClass);
              }
            } else {
              buf += match2[0];
            }
            lastIndex = top.keywordPatternRe.lastIndex;
            match2 = top.keywordPatternRe.exec(modeBuffer);
          }
          buf += modeBuffer.substring(lastIndex);
          emitter.addText(buf);
        }
        function processSubLanguage() {
          if (modeBuffer === "")
            return;
          let result2 = null;
          if (typeof top.subLanguage === "string") {
            if (!languages[top.subLanguage]) {
              emitter.addText(modeBuffer);
              return;
            }
            result2 = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
            continuations[top.subLanguage] = /** @type {CompiledMode} */
            result2._top;
          } else {
            result2 = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
          }
          if (top.relevance > 0) {
            relevance += result2.relevance;
          }
          emitter.__addSublanguage(result2._emitter, result2.language);
        }
        function processBuffer() {
          if (top.subLanguage != null) {
            processSubLanguage();
          } else {
            processKeywords();
          }
          modeBuffer = "";
        }
        function emitKeyword(keyword, scope) {
          if (keyword === "")
            return;
          emitter.startScope(scope);
          emitter.addText(keyword);
          emitter.endScope();
        }
        function emitMultiClass(scope, match2) {
          let i = 1;
          const max = match2.length - 1;
          while (i <= max) {
            if (!scope._emit[i]) {
              i++;
              continue;
            }
            const klass = language.classNameAliases[scope[i]] || scope[i];
            const text = match2[i];
            if (klass) {
              emitKeyword(text, klass);
            } else {
              modeBuffer = text;
              processKeywords();
              modeBuffer = "";
            }
            i++;
          }
        }
        function startNewMode(mode, match2) {
          if (mode.scope && typeof mode.scope === "string") {
            emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
          }
          if (mode.beginScope) {
            if (mode.beginScope._wrap) {
              emitKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
              modeBuffer = "";
            } else if (mode.beginScope._multi) {
              emitMultiClass(mode.beginScope, match2);
              modeBuffer = "";
            }
          }
          top = Object.create(mode, { parent: { value: top } });
          return top;
        }
        function endOfMode(mode, match2, matchPlusRemainder) {
          let matched = startsWith(mode.endRe, matchPlusRemainder);
          if (matched) {
            if (mode["on:end"]) {
              const resp = new Response2(mode);
              mode["on:end"](match2, resp);
              if (resp.isMatchIgnored)
                matched = false;
            }
            if (matched) {
              while (mode.endsParent && mode.parent) {
                mode = mode.parent;
              }
              return mode;
            }
          }
          if (mode.endsWithParent) {
            return endOfMode(mode.parent, match2, matchPlusRemainder);
          }
        }
        function doIgnore(lexeme) {
          if (top.matcher.regexIndex === 0) {
            modeBuffer += lexeme[0];
            return 1;
          } else {
            resumeScanAtSamePosition = true;
            return 0;
          }
        }
        function doBeginMatch(match2) {
          const lexeme = match2[0];
          const newMode = match2.rule;
          const resp = new Response2(newMode);
          const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
          for (const cb of beforeCallbacks) {
            if (!cb)
              continue;
            cb(match2, resp);
            if (resp.isMatchIgnored)
              return doIgnore(lexeme);
          }
          if (newMode.skip) {
            modeBuffer += lexeme;
          } else {
            if (newMode.excludeBegin) {
              modeBuffer += lexeme;
            }
            processBuffer();
            if (!newMode.returnBegin && !newMode.excludeBegin) {
              modeBuffer = lexeme;
            }
          }
          startNewMode(newMode, match2);
          return newMode.returnBegin ? 0 : lexeme.length;
        }
        function doEndMatch(match2) {
          const lexeme = match2[0];
          const matchPlusRemainder = codeToHighlight.substring(match2.index);
          const endMode = endOfMode(top, match2, matchPlusRemainder);
          if (!endMode) {
            return NO_MATCH;
          }
          const origin = top;
          if (top.endScope && top.endScope._wrap) {
            processBuffer();
            emitKeyword(lexeme, top.endScope._wrap);
          } else if (top.endScope && top.endScope._multi) {
            processBuffer();
            emitMultiClass(top.endScope, match2);
          } else if (origin.skip) {
            modeBuffer += lexeme;
          } else {
            if (!(origin.returnEnd || origin.excludeEnd)) {
              modeBuffer += lexeme;
            }
            processBuffer();
            if (origin.excludeEnd) {
              modeBuffer = lexeme;
            }
          }
          do {
            if (top.scope) {
              emitter.closeNode();
            }
            if (!top.skip && !top.subLanguage) {
              relevance += top.relevance;
            }
            top = top.parent;
          } while (top !== endMode.parent);
          if (endMode.starts) {
            startNewMode(endMode.starts, match2);
          }
          return origin.returnEnd ? 0 : lexeme.length;
        }
        function processContinuations() {
          const list = [];
          for (let current = top; current !== language; current = current.parent) {
            if (current.scope) {
              list.unshift(current.scope);
            }
          }
          list.forEach((item) => emitter.openNode(item));
        }
        let lastMatch = {};
        function processLexeme(textBeforeMatch, match2) {
          const lexeme = match2 && match2[0];
          modeBuffer += textBeforeMatch;
          if (lexeme == null) {
            processBuffer();
            return 0;
          }
          if (lastMatch.type === "begin" && match2.type === "end" && lastMatch.index === match2.index && lexeme === "") {
            modeBuffer += codeToHighlight.slice(match2.index, match2.index + 1);
            if (!SAFE_MODE) {
              const err = new Error(`0 width match regex (${languageName})`);
              err.languageName = languageName;
              err.badRule = lastMatch.rule;
              throw err;
            }
            return 1;
          }
          lastMatch = match2;
          if (match2.type === "begin") {
            return doBeginMatch(match2);
          } else if (match2.type === "illegal" && !ignoreIllegals) {
            const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.scope || "<unnamed>") + '"');
            err.mode = top;
            throw err;
          } else if (match2.type === "end") {
            const processed = doEndMatch(match2);
            if (processed !== NO_MATCH) {
              return processed;
            }
          }
          if (match2.type === "illegal" && lexeme === "") {
            return 1;
          }
          if (iterations > 1e5 && iterations > match2.index * 3) {
            const err = new Error("potential infinite loop, way more iterations than matches");
            throw err;
          }
          modeBuffer += lexeme;
          return lexeme.length;
        }
        const language = getLanguage(languageName);
        if (!language) {
          error6(LANGUAGE_NOT_FOUND.replace("{}", languageName));
          throw new Error('Unknown language: "' + languageName + '"');
        }
        const md = compileLanguage(language);
        let result = "";
        let top = continuation || md;
        const continuations = {};
        const emitter = new options.__emitter(options);
        processContinuations();
        let modeBuffer = "";
        let relevance = 0;
        let index = 0;
        let iterations = 0;
        let resumeScanAtSamePosition = false;
        try {
          if (!language.__emitTokens) {
            top.matcher.considerAll();
            for (; ; ) {
              iterations++;
              if (resumeScanAtSamePosition) {
                resumeScanAtSamePosition = false;
              } else {
                top.matcher.considerAll();
              }
              top.matcher.lastIndex = index;
              const match2 = top.matcher.exec(codeToHighlight);
              if (!match2)
                break;
              const beforeMatch = codeToHighlight.substring(index, match2.index);
              const processedCount = processLexeme(beforeMatch, match2);
              index = match2.index + processedCount;
            }
            processLexeme(codeToHighlight.substring(index));
          } else {
            language.__emitTokens(codeToHighlight, emitter);
          }
          emitter.finalize();
          result = emitter.toHTML();
          return {
            language: languageName,
            value: result,
            relevance,
            illegal: false,
            _emitter: emitter,
            _top: top
          };
        } catch (err) {
          if (err.message && err.message.includes("Illegal")) {
            return {
              language: languageName,
              value: escape(codeToHighlight),
              illegal: true,
              relevance: 0,
              _illegalBy: {
                message: err.message,
                index,
                context: codeToHighlight.slice(index - 100, index + 100),
                mode: err.mode,
                resultSoFar: result
              },
              _emitter: emitter
            };
          } else if (SAFE_MODE) {
            return {
              language: languageName,
              value: escape(codeToHighlight),
              illegal: false,
              relevance: 0,
              errorRaised: err,
              _emitter: emitter,
              _top: top
            };
          } else {
            throw err;
          }
        }
      }
      function justTextHighlightResult(code3) {
        const result = {
          value: escape(code3),
          illegal: false,
          relevance: 0,
          _top: PLAINTEXT_LANGUAGE,
          _emitter: new options.__emitter(options)
        };
        result._emitter.addText(code3);
        return result;
      }
      function highlightAuto(code3, languageSubset) {
        languageSubset = languageSubset || options.languages || Object.keys(languages);
        const plaintext = justTextHighlightResult(code3);
        const results = languageSubset.filter(getLanguage).filter(autoDetection).map(
          (name) => _highlight(name, code3, false)
        );
        results.unshift(plaintext);
        const sorted = results.sort((a, b) => {
          if (a.relevance !== b.relevance)
            return b.relevance - a.relevance;
          if (a.language && b.language) {
            if (getLanguage(a.language).supersetOf === b.language) {
              return 1;
            } else if (getLanguage(b.language).supersetOf === a.language) {
              return -1;
            }
          }
          return 0;
        });
        const [best, secondBest] = sorted;
        const result = best;
        result.secondBest = secondBest;
        return result;
      }
      function updateClassName(element, currentLang, resultLang) {
        const language = currentLang && aliases[currentLang] || resultLang;
        element.classList.add("hljs");
        element.classList.add(`language-${language}`);
      }
      function highlightElement(element) {
        let node = null;
        const language = blockLanguage(element);
        if (shouldNotHighlight(language))
          return;
        fire(
          "before:highlightElement",
          { el: element, language }
        );
        if (element.dataset.highlighted) {
          console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", element);
          return;
        }
        if (element.children.length > 0) {
          if (!options.ignoreUnescapedHTML) {
            console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");
            console.warn("https://github.com/highlightjs/highlight.js/wiki/security");
            console.warn("The element with unescaped HTML:");
            console.warn(element);
          }
          if (options.throwUnescapedHTML) {
            const err = new HTMLInjectionError(
              "One of your code blocks includes unescaped HTML.",
              element.innerHTML
            );
            throw err;
          }
        }
        node = element;
        const text = node.textContent;
        const result = language ? highlight2(text, { language, ignoreIllegals: true }) : highlightAuto(text);
        element.innerHTML = result.value;
        element.dataset.highlighted = "yes";
        updateClassName(element, language, result.language);
        element.result = {
          language: result.language,
          // TODO: remove with version 11.0
          re: result.relevance,
          relevance: result.relevance
        };
        if (result.secondBest) {
          element.secondBest = {
            language: result.secondBest.language,
            relevance: result.secondBest.relevance
          };
        }
        fire("after:highlightElement", { el: element, result, text });
      }
      function configure(userOptions) {
        options = inherit(options, userOptions);
      }
      const initHighlighting = () => {
        highlightAll();
        deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
      };
      function initHighlightingOnLoad() {
        highlightAll();
        deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
      }
      let wantsHighlight = false;
      function highlightAll() {
        if (document.readyState === "loading") {
          wantsHighlight = true;
          return;
        }
        const blocks = document.querySelectorAll(options.cssSelector);
        blocks.forEach(highlightElement);
      }
      function boot() {
        if (wantsHighlight)
          highlightAll();
      }
      if (typeof window !== "undefined" && window.addEventListener) {
        window.addEventListener("DOMContentLoaded", boot, false);
      }
      function registerLanguage(languageName, languageDefinition) {
        let lang = null;
        try {
          lang = languageDefinition(hljs);
        } catch (error$1) {
          error6("Language definition for '{}' could not be registered.".replace("{}", languageName));
          if (!SAFE_MODE) {
            throw error$1;
          } else {
            error6(error$1);
          }
          lang = PLAINTEXT_LANGUAGE;
        }
        if (!lang.name)
          lang.name = languageName;
        languages[languageName] = lang;
        lang.rawDefinition = languageDefinition.bind(null, hljs);
        if (lang.aliases) {
          registerAliases(lang.aliases, { languageName });
        }
      }
      function unregisterLanguage(languageName) {
        delete languages[languageName];
        for (const alias of Object.keys(aliases)) {
          if (aliases[alias] === languageName) {
            delete aliases[alias];
          }
        }
      }
      function listLanguages() {
        return Object.keys(languages);
      }
      function getLanguage(name) {
        name = (name || "").toLowerCase();
        return languages[name] || languages[aliases[name]];
      }
      function registerAliases(aliasList, { languageName }) {
        if (typeof aliasList === "string") {
          aliasList = [aliasList];
        }
        aliasList.forEach((alias) => {
          aliases[alias.toLowerCase()] = languageName;
        });
      }
      function autoDetection(name) {
        const lang = getLanguage(name);
        return lang && !lang.disableAutodetect;
      }
      function upgradePluginAPI(plugin) {
        if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) {
          plugin["before:highlightElement"] = (data) => {
            plugin["before:highlightBlock"](
              Object.assign({ block: data.el }, data)
            );
          };
        }
        if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) {
          plugin["after:highlightElement"] = (data) => {
            plugin["after:highlightBlock"](
              Object.assign({ block: data.el }, data)
            );
          };
        }
      }
      function addPlugin(plugin) {
        upgradePluginAPI(plugin);
        plugins.push(plugin);
      }
      function removePlugin(plugin) {
        const index = plugins.indexOf(plugin);
        if (index !== -1) {
          plugins.splice(index, 1);
        }
      }
      function fire(event, args) {
        const cb = event;
        plugins.forEach(function(plugin) {
          if (plugin[cb]) {
            plugin[cb](args);
          }
        });
      }
      function deprecateHighlightBlock(el) {
        deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
        deprecated("10.7.0", "Please use highlightElement now.");
        return highlightElement(el);
      }
      Object.assign(hljs, {
        highlight: highlight2,
        highlightAuto,
        highlightAll,
        highlightElement,
        // TODO: Remove with v12 API
        highlightBlock: deprecateHighlightBlock,
        configure,
        initHighlighting,
        initHighlightingOnLoad,
        registerLanguage,
        unregisterLanguage,
        listLanguages,
        getLanguage,
        registerAliases,
        autoDetection,
        inherit,
        addPlugin,
        removePlugin
      });
      hljs.debugMode = function() {
        SAFE_MODE = false;
      };
      hljs.safeMode = function() {
        SAFE_MODE = true;
      };
      hljs.versionString = version;
      hljs.regex = {
        concat,
        lookahead,
        either,
        optional,
        anyNumberOfTimes
      };
      for (const key in MODES) {
        if (typeof MODES[key] === "object") {
          deepFreeze(MODES[key]);
        }
      }
      Object.assign(hljs, MODES);
      return hljs;
    };
    var highlight = HLJS({});
    highlight.newInstance = () => HLJS({});
    module.exports = highlight;
    highlight.HighlightJS = highlight;
    highlight.default = highlight;
  }
});

// https://jsr.io/@std/text/1.0.0-rc.1/levenshtein_distance.ts
function levenshteinDistance(str1, str2) {
  if (str1.length > str2.length) {
    [str1, str2] = [str2, str1];
  }
  let distances = Array.from(
    { length: str1.length + 1 },
    (_, i) => +i
  );
  for (let str2Index = 0; str2Index < str2.length; str2Index++) {
    const tempDistances = [str2Index + 1];
    for (let str1Index = 0; str1Index < str1.length; str1Index++) {
      const char1 = str1[str1Index];
      const char2 = str2[str2Index];
      if (char1 === char2) {
        tempDistances.push(distances[str1Index]);
      } else {
        tempDistances.push(
          1 + Math.min(
            distances[str1Index],
            distances[str1Index + 1],
            tempDistances.at(-1)
          )
        );
      }
    }
    distances = tempDistances;
  }
  return distances.at(-1);
}

// https://jsr.io/@std/text/1.0.0-rc.1/closest_string.ts
var getWordDistance = levenshteinDistance;
function closestString(givenWord, possibleWords, options) {
  if (possibleWords.length === 0) {
    throw new TypeError(
      "When using closestString(), the possibleWords array must contain at least one word"
    );
  }
  const { caseSensitive } = { ...options };
  if (!caseSensitive) {
    givenWord = givenWord.toLowerCase();
  }
  let nearestWord = possibleWords[0];
  let closestStringDistance = Infinity;
  for (const each of possibleWords) {
    const distance2 = caseSensitive ? getWordDistance(givenWord, each) : getWordDistance(givenWord, each.toLowerCase());
    if (distance2 < closestStringDistance) {
      nearestWord = each;
      closestStringDistance = distance2;
    }
  }
  return nearestWord;
}

// https://jsr.io/@cliffy/flags/1.0.0-rc.5/_utils.ts
function paramCaseToCamelCase(str) {
  return str.replace(
    /-([a-z])/g,
    (g) => g[1].toUpperCase()
  );
}
function getOption(flags, name) {
  while (name[0] === "-") {
    name = name.slice(1);
  }
  for (const flag of flags) {
    if (isOption(flag, name)) {
      return flag;
    }
  }
  return;
}
function didYouMeanOption(option, options) {
  const optionNames = options.map((option2) => [option2.name, ...option2.aliases ?? []]).flat().map((option2) => getFlag(option2));
  return didYouMean(" Did you mean option", getFlag(option), optionNames);
}
function didYouMeanType(type, types) {
  return didYouMean(" Did you mean type", type, types);
}
function didYouMean(message2, type, types) {
  const match2 = types.length ? closestString(type, types) : void 0;
  return match2 ? `${message2} "${match2}"?` : "";
}
function getFlag(name) {
  if (name.startsWith("-")) {
    return name;
  }
  if (name.length > 1) {
    return `--${name}`;
  }
  return `-${name}`;
}
function isOption(option, name) {
  return option.name === name || option.aliases && option.aliases.indexOf(name) !== -1;
}
function matchWildCardOptions(name, flags) {
  for (const option of flags) {
    if (option.name.indexOf("*") === -1) {
      continue;
    }
    let matched = matchWildCardOption(name, option);
    if (matched) {
      matched = { ...matched, name };
      flags.push(matched);
      return matched;
    }
  }
}
function matchWildCardOption(name, option) {
  const parts = option.name.split(".");
  const parts2 = name.split(".");
  if (parts.length !== parts2.length) {
    return false;
  }
  const count = Math.max(parts.length, parts2.length);
  for (let i = 0; i < count; i++) {
    if (parts[i] !== parts2[i] && parts[i] !== "*") {
      return false;
    }
  }
  return option;
}
function getDefaultValue(option) {
  return typeof option.default === "function" ? option.default() : option.default;
}

// https://jsr.io/@cliffy/flags/1.0.0-rc.5/_errors.ts
var FlagsError = class _FlagsError extends Error {
  constructor(message2) {
    super(message2);
    Object.setPrototypeOf(this, _FlagsError.prototype);
  }
};
var UnknownRequiredOptionError = class _UnknownRequiredOptionError extends FlagsError {
  constructor(option, options) {
    super(
      `Unknown required option "${getFlag(option)}".${didYouMeanOption(option, options)}`
    );
    Object.setPrototypeOf(this, _UnknownRequiredOptionError.prototype);
  }
};
var UnknownConflictingOptionError = class _UnknownConflictingOptionError extends FlagsError {
  constructor(option, options) {
    super(
      `Unknown conflicting option "${getFlag(option)}".${didYouMeanOption(option, options)}`
    );
    Object.setPrototypeOf(this, _UnknownConflictingOptionError.prototype);
  }
};
var UnknownTypeError = class _UnknownTypeError extends FlagsError {
  constructor(type, types) {
    super(`Unknown type "${type}".${didYouMeanType(type, types)}`);
    Object.setPrototypeOf(this, _UnknownTypeError.prototype);
  }
};
var ValidationError = class _ValidationError extends FlagsError {
  constructor(message2) {
    super(message2);
    Object.setPrototypeOf(this, _ValidationError.prototype);
  }
};
var DuplicateOptionError = class _DuplicateOptionError extends ValidationError {
  constructor(name) {
    super(
      `Option "${getFlag(name).replace(/^--no-/, "--")}" can only occur once, but was found several times.`
    );
    Object.setPrototypeOf(this, _DuplicateOptionError.prototype);
  }
};
var InvalidOptionError = class _InvalidOptionError extends ValidationError {
  constructor(option, options) {
    super(
      `Invalid option "${getFlag(option)}".${didYouMeanOption(option, options)}`
    );
    Object.setPrototypeOf(this, _InvalidOptionError.prototype);
  }
};
var UnknownOptionError = class _UnknownOptionError extends ValidationError {
  constructor(option, options) {
    super(
      `Unknown option "${getFlag(option)}".${didYouMeanOption(option, options)}`
    );
    Object.setPrototypeOf(this, _UnknownOptionError.prototype);
  }
};
var MissingOptionValueError = class _MissingOptionValueError extends ValidationError {
  constructor(option) {
    super(`Missing value for option "${getFlag(option)}".`);
    Object.setPrototypeOf(this, _MissingOptionValueError.prototype);
  }
};
var InvalidOptionValueError = class _InvalidOptionValueError extends ValidationError {
  constructor(option, expected, value) {
    super(
      `Option "${getFlag(option)}" must be of type "${expected}", but got "${value}".`
    );
    Object.setPrototypeOf(this, _InvalidOptionValueError.prototype);
  }
};
var UnexpectedOptionValueError = class extends ValidationError {
  constructor(option, value) {
    super(
      `Option "${getFlag(option)}" doesn't take a value, but got "${value}".`
    );
    Object.setPrototypeOf(this, InvalidOptionValueError.prototype);
  }
};
var OptionNotCombinableError = class _OptionNotCombinableError extends ValidationError {
  constructor(option) {
    super(`Option "${getFlag(option)}" cannot be combined with other options.`);
    Object.setPrototypeOf(this, _OptionNotCombinableError.prototype);
  }
};
var ConflictingOptionError = class _ConflictingOptionError extends ValidationError {
  constructor(option, conflictingOption) {
    super(
      `Option "${getFlag(option)}" conflicts with option "${getFlag(conflictingOption)}".`
    );
    Object.setPrototypeOf(this, _ConflictingOptionError.prototype);
  }
};
var DependingOptionError = class _DependingOptionError extends ValidationError {
  constructor(option, dependingOption) {
    super(
      `Option "${getFlag(option)}" depends on option "${getFlag(dependingOption)}".`
    );
    Object.setPrototypeOf(this, _DependingOptionError.prototype);
  }
};
var MissingRequiredOptionError = class _MissingRequiredOptionError extends ValidationError {
  constructor(option) {
    super(`Missing required option "${getFlag(option)}".`);
    Object.setPrototypeOf(this, _MissingRequiredOptionError.prototype);
  }
};
var UnexpectedRequiredArgumentError = class _UnexpectedRequiredArgumentError extends ValidationError {
  constructor(arg) {
    super(
      `An required argument cannot follow an optional argument, but "${arg}"  is defined as required.`
    );
    Object.setPrototypeOf(
      this,
      _UnexpectedRequiredArgumentError.prototype
    );
  }
};
var UnexpectedArgumentAfterVariadicArgumentError = class _UnexpectedArgumentAfterVariadicArgumentError extends ValidationError {
  constructor(arg) {
    super(`An argument cannot follow an variadic argument, but got "${arg}".`);
    Object.setPrototypeOf(
      this,
      _UnexpectedArgumentAfterVariadicArgumentError.prototype
    );
  }
};
var InvalidTypeError = class extends ValidationError {
  constructor({ label, name, value, type }, expected) {
    super(
      `${label} "${name}" must be of type "${type}", but got "${value}".` + (expected ? ` Expected values: ${expected.map((value2) => `"${value2}"`).join(", ")}` : "")
    );
    Object.setPrototypeOf(this, MissingOptionValueError.prototype);
  }
};

// https://jsr.io/@cliffy/flags/1.0.0-rc.5/types/boolean.ts
var boolean = (type) => {
  if (~["1", "true"].indexOf(type.value)) {
    return true;
  }
  if (~["0", "false"].indexOf(type.value)) {
    return false;
  }
  throw new InvalidTypeError(type, ["true", "false", "1", "0"]);
};

// https://jsr.io/@cliffy/flags/1.0.0-rc.5/types/number.ts
var number = (type) => {
  const value = Number(type.value);
  if (Number.isFinite(value)) {
    return value;
  }
  throw new InvalidTypeError(type);
};

// https://jsr.io/@cliffy/flags/1.0.0-rc.5/types/string.ts
var string = ({ value }) => {
  return value;
};

// https://jsr.io/@cliffy/flags/1.0.0-rc.5/_validate_flags.ts
function validateFlags(ctx, opts, options = /* @__PURE__ */ new Map()) {
  if (!opts.flags) {
    return;
  }
  setDefaultValues(ctx, opts);
  const optionNames = Object.keys(ctx.flags);
  if (!optionNames.length && opts.allowEmpty) {
    return;
  }
  if (ctx.standalone) {
    validateStandaloneOption(
      ctx,
      options,
      optionNames
    );
    return;
  }
  for (const [name, option] of options) {
    validateUnknownOption(option, opts);
    validateConflictingOptions(ctx, option);
    validateDependingOptions(ctx, option);
    validateRequiredValues(ctx, option, name);
  }
  validateRequiredOptions(ctx, options, opts);
}
function validateUnknownOption(option, opts) {
  if (!getOption(opts.flags ?? [], option.name)) {
    throw new UnknownOptionError(option.name, opts.flags ?? []);
  }
}
function setDefaultValues(ctx, opts) {
  if (!opts.flags?.length) {
    return;
  }
  for (const option of opts.flags) {
    let name;
    let defaultValue = void 0;
    if (option.name.startsWith("no-")) {
      const propName = option.name.replace(/^no-/, "");
      if (typeof ctx.flags[propName] !== "undefined") {
        continue;
      }
      const positiveOption = getOption(opts.flags, propName);
      if (positiveOption) {
        continue;
      }
      name = paramCaseToCamelCase(propName);
      defaultValue = true;
    }
    if (!name) {
      name = paramCaseToCamelCase(option.name);
    }
    const hasDefaultValue = (!opts.ignoreDefaults || typeof opts.ignoreDefaults[name] === "undefined") && typeof ctx.flags[name] === "undefined" && (typeof option.default !== "undefined" || typeof defaultValue !== "undefined");
    if (hasDefaultValue) {
      ctx.flags[name] = getDefaultValue(option) ?? defaultValue;
      ctx.defaults[option.name] = true;
      if (typeof option.value === "function") {
        ctx.flags[name] = option.value(ctx.flags[name]);
      }
    }
  }
}
function validateStandaloneOption(ctx, options, optionNames) {
  if (!ctx.standalone || optionNames.length === 1) {
    return;
  }
  for (const [_, opt] of options) {
    if (!ctx.defaults[opt.name] && opt !== ctx.standalone) {
      throw new OptionNotCombinableError(ctx.standalone.name);
    }
  }
}
function validateConflictingOptions(ctx, option) {
  if (!option.conflicts?.length) {
    return;
  }
  for (const flag of option.conflicts) {
    if (isset(flag, ctx.flags)) {
      throw new ConflictingOptionError(option.name, flag);
    }
  }
}
function validateDependingOptions(ctx, option) {
  if (!option.depends) {
    return;
  }
  for (const flag of option.depends) {
    if (!isset(flag, ctx.flags) && !ctx.defaults[option.name]) {
      throw new DependingOptionError(option.name, flag);
    }
  }
}
function validateRequiredValues(ctx, option, name) {
  if (!option.args) {
    return;
  }
  const isArray = option.args.length > 1;
  for (let i = 0; i < option.args.length; i++) {
    const arg = option.args[i];
    if (arg.optional) {
      continue;
    }
    const hasValue = isArray ? typeof ctx.flags[name][i] !== "undefined" : typeof ctx.flags[name] !== "undefined";
    if (!hasValue) {
      throw new MissingOptionValueError(option.name);
    }
  }
}
function validateRequiredOptions(ctx, options, opts) {
  if (!opts.flags?.length) {
    return;
  }
  const optionsValues = [...options.values()];
  for (const option of opts.flags) {
    if (!option.required || paramCaseToCamelCase(option.name) in ctx.flags) {
      continue;
    }
    const conflicts = option.conflicts ?? [];
    const hasConflict = conflicts.find((flag) => !!ctx.flags[flag]);
    const hasConflicts = hasConflict || optionsValues.find(
      (opt) => opt.conflicts?.find((flag) => flag === option.name)
    );
    if (hasConflicts) {
      continue;
    }
    throw new MissingRequiredOptionError(option.name);
  }
}
function isset(flagName, flags) {
  const name = paramCaseToCamelCase(flagName);
  return typeof flags[name] !== "undefined";
}

// https://jsr.io/@cliffy/flags/1.0.0-rc.5/types/integer.ts
var integer = (type) => {
  const value = Number(type.value);
  if (Number.isInteger(value)) {
    return value;
  }
  throw new InvalidTypeError(type);
};

// https://jsr.io/@cliffy/flags/1.0.0-rc.5/flags.ts
var DefaultTypes = {
  string,
  number,
  integer,
  boolean
};
function parseFlags(argsOrCtx, opts = {}) {
  let args;
  let ctx;
  if (Array.isArray(argsOrCtx)) {
    ctx = {};
    args = argsOrCtx;
  } else {
    ctx = argsOrCtx;
    args = argsOrCtx.unknown;
    argsOrCtx.unknown = [];
  }
  args = args.slice();
  ctx.flags ??= {};
  ctx.literal ??= [];
  ctx.unknown ??= [];
  ctx.stopEarly = false;
  ctx.stopOnUnknown = false;
  ctx.defaults ??= {};
  opts.dotted ??= true;
  validateOptions(opts);
  const options = parseArgs(ctx, args, opts);
  validateFlags(ctx, opts, options);
  if (opts.dotted) {
    parseDottedOptions(ctx);
  }
  return ctx;
}
function validateOptions(opts) {
  opts.flags?.forEach((opt) => {
    opt.depends?.forEach((flag) => {
      if (!opts.flags || !getOption(opts.flags, flag)) {
        throw new UnknownRequiredOptionError(flag, opts.flags ?? []);
      }
    });
    opt.conflicts?.forEach((flag) => {
      if (!opts.flags || !getOption(opts.flags, flag)) {
        throw new UnknownConflictingOptionError(flag, opts.flags ?? []);
      }
    });
  });
}
function parseArgs(ctx, args, opts) {
  const optionsMap = /* @__PURE__ */ new Map();
  let inLiteral = false;
  for (let argsIndex = 0; argsIndex < args.length; argsIndex++) {
    let parseNext = function(option2) {
      if (negate) {
        setFlagValue(false);
        return;
      } else if (!option2.args?.length) {
        setFlagValue(void 0);
        return;
      }
      const arg = option2.args[optionArgsIndex];
      if (!arg) {
        const flag = next();
        throw new UnknownOptionError(flag, opts.flags ?? []);
      }
      if (!arg.type) {
        arg.type = "boolean" /* BOOLEAN */;
      }
      if (!option2.args?.length && arg.type === "boolean" /* BOOLEAN */ && arg.optional === void 0) {
        arg.optional = true;
      }
      if (arg.optional) {
        inOptionalArg = true;
      } else if (inOptionalArg) {
        throw new UnexpectedRequiredArgumentError(option2.name);
      }
      let result;
      let increase = false;
      if (arg.list && hasNext(arg)) {
        const parsed = next().split(arg.separator || ",").map((nextValue) => {
          const value = parseValue(option2, arg, nextValue);
          if (typeof value === "undefined") {
            throw new InvalidOptionValueError(
              option2.name,
              arg.type ?? "?",
              nextValue
            );
          }
          return value;
        });
        if (parsed?.length) {
          result = parsed;
        }
      } else {
        if (hasNext(arg)) {
          result = parseValue(option2, arg, next());
        } else if (arg.optional && arg.type === "boolean" /* BOOLEAN */) {
          result = true;
        }
      }
      if (increase && typeof currentValue === "undefined") {
        argsIndex++;
        if (!arg.variadic) {
          optionArgsIndex++;
        } else if (option2.args[optionArgsIndex + 1]) {
          throw new UnexpectedArgumentAfterVariadicArgumentError(next());
        }
      }
      if (typeof result !== "undefined" && (option2.args.length > 1 || arg.variadic)) {
        if (!ctx.flags[propName]) {
          setFlagValue([]);
        }
        ctx.flags[propName].push(result);
        if (hasNext(arg)) {
          parseNext(option2);
        }
      } else {
        setFlagValue(result);
      }
      function hasNext(arg2) {
        if (!option2.args?.length) {
          return false;
        }
        const nextValue = currentValue ?? args[argsIndex + 1];
        if (!nextValue) {
          return false;
        }
        if (option2.args.length > 1 && optionArgsIndex >= option2.args.length) {
          return false;
        }
        if (!arg2.optional) {
          return true;
        }
        if (option2.equalsSign && arg2.optional && !arg2.variadic && typeof currentValue === "undefined") {
          return false;
        }
        if (arg2.optional || arg2.variadic) {
          return nextValue[0] !== "-" || typeof currentValue !== "undefined" || arg2.type === "number" /* NUMBER */ && !isNaN(Number(nextValue));
        }
        return false;
      }
      function parseValue(option3, arg2, value) {
        const result2 = opts.parse ? opts.parse({
          label: "Option",
          type: arg2.type || "string" /* STRING */,
          name: `--${option3.name}`,
          value
        }) : parseDefaultType(option3, arg2, value);
        if (typeof result2 !== "undefined") {
          increase = true;
        }
        return result2;
      }
    }, setFlagValue = function(value) {
      ctx.flags[propName] = value;
      if (ctx.defaults[propName]) {
        delete ctx.defaults[propName];
      }
    };
    let option;
    let current = args[argsIndex];
    let currentValue;
    let negate = false;
    if (inLiteral) {
      ctx.literal.push(current);
      continue;
    } else if (current === "--") {
      inLiteral = true;
      continue;
    } else if (ctx.stopEarly || ctx.stopOnUnknown) {
      ctx.unknown.push(current);
      continue;
    }
    const isFlag = current.length > 1 && current[0] === "-";
    if (!isFlag) {
      if (opts.stopEarly) {
        ctx.stopEarly = true;
      }
      ctx.unknown.push(current);
      continue;
    }
    const isShort = current[1] !== "-";
    const isLong = isShort ? false : current.length > 3 && current[2] !== "-";
    if (!isShort && !isLong) {
      throw new InvalidOptionError(current, opts.flags ?? []);
    }
    if (isShort && current.length > 2 && current[2] !== ".") {
      args.splice(argsIndex, 1, ...splitFlags(current));
      current = args[argsIndex];
    } else if (isLong && current.startsWith("--no-")) {
      negate = true;
    }
    const equalSignIndex = current.indexOf("=");
    if (equalSignIndex !== -1) {
      currentValue = current.slice(equalSignIndex + 1) || void 0;
      current = current.slice(0, equalSignIndex);
    }
    if (opts.flags) {
      option = getOption(opts.flags, current);
      if (!option) {
        const name = current.replace(/^-+/, "");
        option = matchWildCardOptions(name, opts.flags);
        if (!option) {
          if (opts.stopOnUnknown) {
            ctx.stopOnUnknown = true;
            ctx.unknown.push(args[argsIndex]);
            continue;
          }
          throw new UnknownOptionError(current, opts.flags);
        }
      }
    } else {
      option = {
        name: current.replace(/^-+/, ""),
        optionalValue: true,
        type: "string" /* STRING */
      };
    }
    if (option.standalone) {
      ctx.standalone = option;
    }
    const positiveName = negate ? option.name.replace(/^no-?/, "") : option.name;
    const propName = paramCaseToCamelCase(positiveName);
    if (typeof ctx.flags[propName] !== "undefined") {
      if (!opts.flags?.length) {
        option.collect = true;
      } else if (!option.collect && !ctx.defaults[option.name]) {
        throw new DuplicateOptionError(current);
      }
    }
    if (option.type && !option.args?.length) {
      option.args = [{
        type: option.type,
        optional: option.optionalValue,
        variadic: option.variadic,
        list: option.list,
        separator: option.separator
      }];
    }
    if (opts.flags?.length && !option.args?.length && typeof currentValue !== "undefined") {
      throw new UnexpectedOptionValueError(option.name, currentValue);
    }
    let optionArgsIndex = 0;
    let inOptionalArg = false;
    const next = () => currentValue ?? args[argsIndex + 1];
    const previous = ctx.flags[propName];
    parseNext(option);
    if (typeof ctx.flags[propName] === "undefined") {
      if (option.args?.length && !option.args?.[optionArgsIndex].optional) {
        throw new MissingOptionValueError(option.name);
      } else if (typeof option.default !== "undefined" && (option.type || option.value || option.args?.length)) {
        ctx.flags[propName] = getDefaultValue(option);
      } else {
        setFlagValue(true);
      }
    }
    if (option.value) {
      const value = option.value(ctx.flags[propName], previous);
      setFlagValue(value);
    } else if (option.collect) {
      const value = typeof previous !== "undefined" ? Array.isArray(previous) ? previous : [previous] : [];
      value.push(ctx.flags[propName]);
      setFlagValue(value);
    }
    optionsMap.set(propName, option);
    opts.option?.(option, ctx.flags[propName]);
  }
  return optionsMap;
}
function parseDottedOptions(ctx) {
  ctx.flags = Object.keys(ctx.flags).reduce(
    (result, key) => {
      if (~key.indexOf(".")) {
        key.split(".").reduce(
          (result2, subKey, index, parts) => {
            if (index === parts.length - 1) {
              result2[subKey] = ctx.flags[key];
            } else {
              result2[subKey] = result2[subKey] ?? {};
            }
            return result2[subKey];
          },
          result
        );
      } else {
        result[key] = ctx.flags[key];
      }
      return result;
    },
    {}
  );
}
function splitFlags(flag) {
  flag = flag.slice(1);
  const normalized = [];
  const index = flag.indexOf("=");
  const flags = (index !== -1 ? flag.slice(0, index) : flag).split("");
  if (isNaN(Number(flag[flag.length - 1]))) {
    flags.forEach((val) => normalized.push(`-${val}`));
  } else {
    normalized.push(`-${flags.shift()}`);
    if (flags.length) {
      normalized.push(flags.join(""));
    }
  }
  if (index !== -1) {
    normalized[normalized.length - 1] += flag.slice(index);
  }
  return normalized;
}
function parseDefaultType(option, arg, value) {
  const type = arg.type || "string" /* STRING */;
  const parseType = DefaultTypes[type];
  if (!parseType) {
    throw new UnknownTypeError(type, Object.keys(DefaultTypes));
  }
  return parseType({
    label: "Option",
    type,
    name: `--${option.name}`,
    value
  });
}

// https://jsr.io/@cliffy/command/1.0.0-rc.5/command.ts
init_colors();

// https://jsr.io/@cliffy/command/1.0.0-rc.5/_utils.ts
function getFlag2(name) {
  if (name.startsWith("-")) {
    return name;
  }
  if (name.length > 1) {
    return `--${name}`;
  }
  return `-${name}`;
}
function didYouMean2(message2, type, types) {
  const match2 = types.length ? closestString(type, types) : void 0;
  return match2 ? `${message2} "${match2}"?` : "";
}
function didYouMeanCommand(command, commands, excludes = []) {
  const commandNames = commands.map((command2) => command2.getName()).filter((command2) => !excludes.includes(command2));
  return didYouMean2(" Did you mean command", command, commandNames);
}
var ARGUMENT_REGEX = /^[<\[].+[\]>]$/;
var ARGUMENT_DETAILS_REGEX = /[<\[:>\]]/;
function splitArguments(args) {
  const parts = args.trim().split(/[, =] */g);
  const typeParts = [];
  while (parts[parts.length - 1] && ARGUMENT_REGEX.test(parts[parts.length - 1])) {
    typeParts.unshift(parts.pop());
  }
  const typeDefinition = typeParts.join(" ");
  return { flags: parts, typeDefinition, equalsSign: args.includes("=") };
}
function parseArgumentsDefinition(argsDefinition, validate = true, all2) {
  const argumentDetails = [];
  let hasOptional = false;
  let hasVariadic = false;
  const parts = argsDefinition.split(/ +/);
  for (const arg of parts) {
    if (validate && hasVariadic) {
      throw new UnexpectedArgumentAfterVariadicArgumentError(arg);
    }
    const parts2 = arg.split(ARGUMENT_DETAILS_REGEX);
    if (!parts2[1]) {
      if (all2) {
        argumentDetails.push(parts2[0]);
      }
      continue;
    }
    const type = parts2[2] || "string" /* STRING */;
    const details = {
      optional: arg[0] === "[",
      name: parts2[1],
      action: parts2[3] || type,
      variadic: false,
      list: type ? arg.indexOf(type + "[]") !== -1 : false,
      type
    };
    if (validate && !details.optional && hasOptional) {
      throw new UnexpectedRequiredArgumentError(details.name);
    }
    if (arg[0] === "[") {
      hasOptional = true;
    }
    if (details.name.length > 3) {
      const istVariadicLeft = details.name.slice(0, 3) === "...";
      const istVariadicRight = details.name.slice(-3) === "...";
      hasVariadic = details.variadic = istVariadicLeft || istVariadicRight;
      if (istVariadicLeft) {
        details.name = details.name.slice(3);
      } else if (istVariadicRight) {
        details.name = details.name.slice(0, -3);
      }
    }
    argumentDetails.push(details);
  }
  return argumentDetails;
}
function dedent(str) {
  const lines = str.split(/\r?\n|\r/g);
  let text = "";
  let indent = 0;
  for (const line of lines) {
    if (text || line.trim()) {
      if (!text) {
        text = line.trimStart();
        indent = line.length - text.length;
      } else {
        text += line.slice(indent);
      }
      text += "\n";
    }
  }
  return text.trimEnd();
}
function getDescription(description, short) {
  return short ? description.trim().split("\n", 1)[0].trim() : dedent(description);
}
function underscoreToCamelCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase().replace(
    /_([a-z])/g,
    (g) => g[1].toUpperCase()
  );
}

// https://jsr.io/@cliffy/command/1.0.0-rc.5/_errors.ts
init_colors();
var CommandError = class _CommandError extends Error {
  constructor(message2) {
    super(message2);
    Object.setPrototypeOf(this, _CommandError.prototype);
  }
};
var ValidationError2 = class _ValidationError extends CommandError {
  exitCode;
  cmd;
  constructor(message2, { exitCode } = {}) {
    super(message2);
    Object.setPrototypeOf(this, _ValidationError.prototype);
    this.exitCode = exitCode ?? 2;
  }
};
var DuplicateOptionNameError = class _DuplicateOptionNameError extends CommandError {
  constructor(optionName, commandName) {
    super(
      `An option with name '${bold(getFlag2(optionName))}' is already registered on command '${bold(commandName)}'. If it is intended to override the option, set the '${bold("override")}' option of the '${bold("option")}' method to true.`
    );
    Object.setPrototypeOf(this, _DuplicateOptionNameError.prototype);
  }
};
var MissingCommandNameCompletionsError = class _MissingCommandNameCompletionsError extends CommandError {
  constructor(shell) {
    super(
      `Failed to generate shell completions. Missing main command name. Use '${bold('cmd.name("<comand-name>")')}' to set the name of the main command or use the '${bold("--name")}' option from the '${bold("completions")}' command to set the cli name: '${bold(`<command> completions ${shell} --name <cli-name>`)}'.`
    );
    Object.setPrototypeOf(
      this,
      _MissingCommandNameCompletionsError.prototype
    );
  }
};
var MissingCommandNameError = class _MissingCommandNameError extends CommandError {
  constructor() {
    super("Missing command name.");
    Object.setPrototypeOf(this, _MissingCommandNameError.prototype);
  }
};
var DuplicateCommandNameError = class _DuplicateCommandNameError extends CommandError {
  constructor(name) {
    super(`Duplicate command name "${name}".`);
    Object.setPrototypeOf(this, _DuplicateCommandNameError.prototype);
  }
};
var DuplicateCommandAliasError = class _DuplicateCommandAliasError extends CommandError {
  constructor(alias) {
    super(`Duplicate command alias "${alias}".`);
    Object.setPrototypeOf(this, _DuplicateCommandAliasError.prototype);
  }
};
var CommandNotFoundError = class _CommandNotFoundError extends CommandError {
  constructor(name, commands, excluded) {
    super(
      `Unknown command "${name}".${didYouMeanCommand(name, commands, excluded)}`
    );
    Object.setPrototypeOf(this, _CommandNotFoundError.prototype);
  }
};
var DuplicateTypeError = class _DuplicateTypeError extends CommandError {
  constructor(name) {
    super(`Type with name "${name}" already exists.`);
    Object.setPrototypeOf(this, _DuplicateTypeError.prototype);
  }
};
var DuplicateCompletionError = class _DuplicateCompletionError extends CommandError {
  constructor(name) {
    super(`Completion with name "${name}" already exists.`);
    Object.setPrototypeOf(this, _DuplicateCompletionError.prototype);
  }
};
var DuplicateExampleError = class _DuplicateExampleError extends CommandError {
  constructor(name) {
    super(`Example with name "${name}" already exists.`);
    Object.setPrototypeOf(this, _DuplicateExampleError.prototype);
  }
};
var DuplicateEnvVarError = class _DuplicateEnvVarError extends CommandError {
  constructor(name) {
    super(`Environment variable with name "${name}" already exists.`);
    Object.setPrototypeOf(this, _DuplicateEnvVarError.prototype);
  }
};
var MissingRequiredEnvVarError = class _MissingRequiredEnvVarError extends ValidationError2 {
  constructor(envVar) {
    super(`Missing required environment variable "${envVar.names[0]}".`);
    Object.setPrototypeOf(this, _MissingRequiredEnvVarError.prototype);
  }
};
var TooManyEnvVarValuesError = class _TooManyEnvVarValuesError extends CommandError {
  constructor(name) {
    super(
      `An environment variable can only have one value, but "${name}" has more than one.`
    );
    Object.setPrototypeOf(this, _TooManyEnvVarValuesError.prototype);
  }
};
var UnexpectedOptionalEnvVarValueError = class _UnexpectedOptionalEnvVarValueError extends CommandError {
  constructor(name) {
    super(
      `An environment variable cannot have an optional value, but "${name}" is defined as optional.`
    );
    Object.setPrototypeOf(this, _UnexpectedOptionalEnvVarValueError.prototype);
  }
};
var UnexpectedVariadicEnvVarValueError = class _UnexpectedVariadicEnvVarValueError extends CommandError {
  constructor(name) {
    super(
      `An environment variable cannot have an variadic value, but "${name}" is defined as variadic.`
    );
    Object.setPrototypeOf(this, _UnexpectedVariadicEnvVarValueError.prototype);
  }
};
var DefaultCommandNotFoundError = class _DefaultCommandNotFoundError extends CommandError {
  constructor(name, commands) {
    super(
      `Default command "${name}" not found.${didYouMeanCommand(name, commands)}`
    );
    Object.setPrototypeOf(this, _DefaultCommandNotFoundError.prototype);
  }
};
var UnknownCompletionCommandError = class _UnknownCompletionCommandError extends CommandError {
  constructor(name, commands) {
    super(
      `Auto-completion failed. Unknown command "${name}".${didYouMeanCommand(name, commands)}`
    );
    Object.setPrototypeOf(this, _UnknownCompletionCommandError.prototype);
  }
};
var UnknownCommandError = class _UnknownCommandError extends ValidationError2 {
  constructor(name, commands, excluded) {
    super(
      `Unknown command "${name}".${didYouMeanCommand(name, commands, excluded)}`
    );
    Object.setPrototypeOf(this, _UnknownCommandError.prototype);
  }
};
var NoArgumentsAllowedError = class _NoArgumentsAllowedError extends ValidationError2 {
  constructor(name) {
    super(`No arguments allowed for command "${name}".`);
    Object.setPrototypeOf(this, _NoArgumentsAllowedError.prototype);
  }
};
var MissingArgumentsError = class _MissingArgumentsError extends ValidationError2 {
  constructor(names) {
    super(`Missing argument(s): ${names.join(", ")}`);
    Object.setPrototypeOf(this, _MissingArgumentsError.prototype);
  }
};
var MissingArgumentError = class _MissingArgumentError extends ValidationError2 {
  constructor(name) {
    super(`Missing argument: ${name}`);
    Object.setPrototypeOf(this, _MissingArgumentError.prototype);
  }
};
var TooManyArgumentsError = class _TooManyArgumentsError extends ValidationError2 {
  constructor(args) {
    super(`Too many arguments: ${args.join(" ")}`);
    Object.setPrototypeOf(this, _TooManyArgumentsError.prototype);
  }
};

// https://jsr.io/@cliffy/internal/1.0.0-rc.5/runtime/exit.ts
function exit(code3) {
  const { Deno: Deno4, process } = globalThis;
  const exit2 = Deno4?.exit ?? process?.exit;
  if (exit2) {
    exit2(code3);
  }
  throw new Error("unsupported runtime");
}

// https://jsr.io/@cliffy/internal/1.0.0-rc.5/runtime/get_args.ts
function getArgs() {
  const { Deno: Deno4, process } = globalThis;
  return Deno4?.args ?? process?.argv.slice(2) ?? [];
}

// https://jsr.io/@cliffy/internal/1.0.0-rc.5/runtime/get_env.ts
function getEnv(name) {
  const { Deno: Deno4, process } = globalThis;
  if (Deno4) {
    return Deno4.env.get(name);
  } else if (process) {
    return process.env[name];
  }
  throw new Error("unsupported runtime");
}

// https://jsr.io/@cliffy/table/1.0.0-rc.5/border.ts
var border = {
  top: "\u2500",
  topMid: "\u252C",
  topLeft: "\u250C",
  topRight: "\u2510",
  bottom: "\u2500",
  bottomMid: "\u2534",
  bottomLeft: "\u2514",
  bottomRight: "\u2518",
  left: "\u2502",
  leftMid: "\u251C",
  mid: "\u2500",
  midMid: "\u253C",
  right: "\u2502",
  rightMid: "\u2524",
  middle: "\u2502"
};

// https://jsr.io/@cliffy/table/1.0.0-rc.5/cell.ts
var Cell = class _Cell {
  /**
   * Cell constructor.
   *
   * @param value Cell value.
   */
  constructor(value) {
    this.value = value;
  }
  options = {};
  /** Get cell length. */
  get length() {
    return this.toString().length;
  }
  /**
   * Any unterminated ANSI formatting overflowed from previous lines of a
   * multi-line cell.
   */
  get unclosedAnsiRuns() {
    return this.options.unclosedAnsiRuns ?? "";
  }
  set unclosedAnsiRuns(val) {
    this.options.unclosedAnsiRuns = val;
  }
  /**
   * Create a new cell. If value is a cell, the value and all options of the cell
   * will be copied to the new cell.
   *
   * @param value Cell or cell value.
   */
  static from(value) {
    let cell;
    if (value instanceof _Cell) {
      cell = new this(value.getValue());
      cell.options = { ...value.options };
    } else {
      cell = new this(value);
    }
    return cell;
  }
  /** Get cell string value. */
  toString() {
    return this.value.toString();
  }
  /** Get cell value. */
  getValue() {
    return this.value;
  }
  /**
   * Set cell value.
   *
   * @param value Cell or cell value.
   */
  setValue(value) {
    this.value = value;
    return this;
  }
  /**
   * Clone cell with all options.
   *
   * @param value Cell or cell value.
   */
  clone(value) {
    return _Cell.from(value ?? this);
  }
  /**
   * Setter:
   */
  /**
   * Enable/disable cell border.
   *
   * @param enable    Enable/disable cell border.
   * @param override  Override existing value.
   */
  border(enable = true, override = true) {
    if (override || typeof this.options.border === "undefined") {
      this.options.border = enable;
    }
    return this;
  }
  /**
   * Set col span.
   *
   * ```ts
   * import { Cell, Table } from "./mod.ts";
   *
   * new Table()
   *   .body([
   *     [
   *       new Cell("Row 1 & 2 Column 1").rowSpan(2),
   *       "Row 1 Column 2",
   *       "Row 1 Column 3",
   *     ],
   *     [new Cell("Row 2 Column 2 & 3").colSpan(2)],
   *   ])
   *   .border()
   *   .render();
   * ```
   *
   * @param span      Number of cols to span.
   * @param override  Override existing value.
   */
  colSpan(span, override = true) {
    if (override || typeof this.options.colSpan === "undefined") {
      this.options.colSpan = span;
    }
    return this;
  }
  /**
   * Set row span.
   *
   * ```ts
   * import { Cell, Table } from "./mod.ts";
   *
   * new Table()
   *   .body([
   *     [
   *       new Cell("Row 1 & 2 Column 1").rowSpan(2),
   *       "Row 1 Column 2",
   *       "Row 1 Column 3",
   *     ],
   *     [new Cell("Row 2 Column 2 & 3").colSpan(2)],
   *   ])
   *   .border()
   *   .render();
   * ```
   *
   * @param span      Number of rows to span.
   * @param override  Override existing value.
   */
  rowSpan(span, override = true) {
    if (override || typeof this.options.rowSpan === "undefined") {
      this.options.rowSpan = span;
    }
    return this;
  }
  /**
   * Align cell content.
   *
   * @param direction Align direction.
   * @param override  Override existing value.
   */
  align(direction, override = true) {
    if (override || typeof this.options.align === "undefined") {
      this.options.align = direction;
    }
    return this;
  }
  /**
   * Getter:
   */
  /** Check if cell has border. */
  getBorder() {
    return this.options.border === true;
  }
  /** Get col span. */
  getColSpan() {
    return typeof this.options.colSpan === "number" && this.options.colSpan > 0 ? this.options.colSpan : 1;
  }
  /** Get row span. */
  getRowSpan() {
    return typeof this.options.rowSpan === "number" && this.options.rowSpan > 0 ? this.options.rowSpan : 1;
  }
  /** Get row span. */
  getAlign() {
    return this.options.align ?? "left";
  }
};

// https://jsr.io/@cliffy/table/1.0.0-rc.5/column.ts
var Column = class _Column {
  /**
   * Create a new cell from column options or an existing column.
   * @param options
   */
  static from(options) {
    const opts = options instanceof _Column ? options.opts : options;
    return new _Column().options(opts);
  }
  opts = {};
  /** Set column options. */
  options(options) {
    Object.assign(this.opts, options);
    return this;
  }
  /** Set min column width. */
  minWidth(width) {
    this.opts.minWidth = width;
    return this;
  }
  /** Set max column width. */
  maxWidth(width) {
    this.opts.maxWidth = width;
    return this;
  }
  /** Set column border. */
  border(border2 = true) {
    this.opts.border = border2;
    return this;
  }
  /** Set column padding. */
  padding(padding) {
    this.opts.padding = padding;
    return this;
  }
  /** Set column alignment. */
  align(direction) {
    this.opts.align = direction;
    return this;
  }
  /** Get min column width. */
  getMinWidth() {
    return this.opts.minWidth;
  }
  /** Get max column width. */
  getMaxWidth() {
    return this.opts.maxWidth;
  }
  /** Get column border. */
  getBorder() {
    return this.opts.border;
  }
  /** Get column padding. */
  getPadding() {
    return this.opts.padding;
  }
  /** Get column alignment. */
  getAlign() {
    return this.opts.align;
  }
};

// https://jsr.io/@cliffy/table/1.0.0-rc.5/_utils.ts
init_colors();

// https://jsr.io/@std/cli/1.0.0-rc.2/_data.json
var data_default = {
  UNICODE_VERSION: "15.0.0",
  tables: [
    {
      d: "AAECAwQFBgcICQoLDA0OAw8DDwkQCRESERIA",
      r: "AQEBAgEBAQEBAQEBAQEBBwEHAVABBwcBBwF4"
    },
    {
      d: "AAECAwQFBgcGCAYJCgsMDQ4PEAYREhMUBhUWFxgZGhscHR4fICEiIyIkJSYnKCkqJSssLS4vMDEyMzQ1Njc4OToGOzwKBj0GPj9AQUIGQwZEBkVGR0hJSktMTQZOBgoGT1BRUlNUVVZXWFkGWgZbBlxdXl1fYGFiY2RlZmdoBmlqBmsGAQZsBm1uO29wcXI7czt0dXZ3OwY7eHkGent8Bn0Gfn+AgYKDhIWGBoc7iAZdO4kGiosGAXGMBo0GjgaPBpAGkQaSBpMGlJUGlpcGmJmam5ydnp+gLgahLKIGo6SlpganqKmqqwasBq0Grq8GsLGyswa0BrUGtre4Brm6uwZHvAa9vga/wME7wjvDxAbFO8bHO8gGyQbKywbMzQbOBs/Q0QbSBr8GvgbT1AbUBtUG1gbXBtjZ2tsG3N0G3t/g4eLjO+Tl5ufoO+k76gbrBuztOwbu7/AGO+XxCgYKCwZd8g==",
      r: "AQEBAQEBAQEBAQEBAQEBAQEBAQMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECBQEOAQEBAQEBAQEBAwEBAQEBAQEBAQIBAwEIAQEBAQEBAQEBAQEBAQIBAQEBAQEBAQEBAQEBAQEBDQEBBQEBAQEBAgEBAwEBAQEBAQEBAQEBbQHaAQEFAQEBBAECAQEBAQEBAQEBAwGuASFkCAELAQEBAQEBAQEHAQMBAQEaAQIBCAEFAQEBAQEBAQEBAQEBAQEBAQEBAQECAQEBAQIBAQEBAQEBAwEDAQEBAQEBAQUBAQEBAQEBBAEBAVIBAdkBARABAQFfARMBAYoBBAEBBQEmAUkBAQcBAQIBHgEBARUBAQEBAQUBAQcBDwEBARoBAgEBAQEBAQECAQEBAQEBAQEBAQEBAQEBAQMBBAEBAgEBAQEUfwEBAQIDAXj/AQ=="
    },
    {
      d: "AFUVAF3Xd3X/93//VXVVV9VX9V91f1/31X93XVXdVdVV9dVV/VVX1X9X/131VfXVVXV3V1VdVV1V1/1dV1X/3VUAVf3/3/9fVf3/3/9fVV1V/11VFQBQVQEAEEEQVQBQVQBAVFUVAFVUVQUAEAAUBFBVFVFVAEBVBQBUVRUAVVFVBRAAAVBVAVVQVQBVBQBAVUVUAQBUUQEAVQVVUVVUAVRVUVUFVUVBVVRBFRRQUVVQUVUBEFRRVQVVBQBRVRQBVFVRVUFVBVVFVVRVUVVUVQRUBQRQVUFVBVVFVVBVBVVQVRVUAVRVUVUFVVFVRVUFRFVRAEBVFQBAVVEAVFUAQFVQVRFRVQEAQAAEVQEAAQBUVUVVAQQAQVVQBVRVAVRVRUFVUVVRVaoAVQFVBVRVBVUFVQVVEABQVUUBAFVRVRUAVUFVUVVAFVRVRVUBVRUUVUUAQEQBAFQVABRVAEBVAFUEQFRFVRUAVVBVBVAQUFVFUBFQVQAFVUAABABUUVVUUFUVANd/X3//BUD3XdV1VQAEAFVXVdX9V1VXVQBUVdVdVdV1VX111VXVV9V//1X/X1VdVf9fVV9VdVdV1VX31dfVXXX9193/d1X/VV9VV3VVX//1VfVVXVVdVdVVdVWlVWlVqVaWVf/f/1X/Vf/1X1Xf/19V9VVf9df1X1X1X1XVVWlVfV31VVpVd1V3VapV33/fVZVVlVX1WVWlVelV+v/v//7/31Xv/6/77/tVWaVVVlVdVWaVmlX1/1WpVVZVlVWVVlVW+V9VFVBVAKqaqlWqWlWqVaoKoKpqqapqgapVqaqpqmqqVapqqv+qVqpqVRVAAFBVBVVQVUUVVUFVVFVQVQBQVRVVBQBQVRUAUFWqVkBVFQVQVVFVAUBBVRVVVFVUVQQUVAVRVVBVRVVRVFFVqlVFVQCqWlUAqmqqaqpVqlZVqmpVAV1VUVVUVQVAVQFBVQBVQBVVQVUAVRVUVQFVBQBUVQVQVVFVAEBVFFRVFVBVFUBBUUVVUVVAVRUAAQBUVRVVUFUFAEBVARRVFVAEVUVVFQBAVVRVBQBUAFRVAAVEVUVVFQBEFQRVBVBVEFRVUFUVAEARVFUVUQAQVQEFEABVFQBBVRVEFVUABVVUVQEAQFUVABRAVRVVAUABVQUAQFBVAEAAEFUFAAUABEFVAUBFEAAQVVARVRVUVVBVBUBVRFVUFQBQVQBUVQBAVRVVFUBVqlRVWlWqVapaVapWVaqpqmmqalVlVWpZVapVqlVBAFUAUABAVRVQVRUAQAEAVQVQVQVUVQBAFQBUVVFVVFUVAAEAVQBAABQAEARAVUVVAFUAQFUAQFVWVZVV/39V/1//X1X/76uq6v9XVWpVqlWqVlVaVapaVapWVamqmqqmqlWqapWqVapWqmqmqpaqWlWVaqpVZVVpVVZVlapVqlpVVmqpVapVlVZVqlZVqlVWVapqqpqqVapWqlZVqpqqWlWlqlWqVlWqVlVRVQD/Xw==",
      r: "CBcBCAEBAQEBAQEBAQECAQEBAQEBAQEBAQEBAQMBAQECAQEBAQEBAQEBAQEBBAEBGAEDAQwBAwEIAQEBAQEBAQgcCAEDAQEBAQEDAQEBDQEDEAELAQEBEQEKAQEBDgEBAgIBAQoBBQQBCAEBAQEBAQEHAQEHBgEWAQIBDQECAgEFAQECAgEKAQ0BAQIKAQ0BDQEBAQEBAQEBAgEHAQ4BAQEBAQQBBgEBDgEBAQEBAQcBAQIBAQEBBAEFAQEBDgEBAQEBAQECAQcBDwECAQwCDQEBAQEBAQECAQgBAQEEAQcBDQEBAQEBAQQBBwERAQEBARYBAQECAQEBGAECAQIBARIBBgEBDQECAQEBAQECAQgBAQEZAQEBAgYBAQEDAQECAQEBAQMBCBgIBwEMAQEGAQcBBwEQAQEBAQEBAgIBCgEBDQEIAQ0BAQEBAQEBBgEBDgEBAQEBAQEBAgEMBwEMAQwBAQEBCQECAwEHAQEBAQ0BAQEBDgIBBgEDAQEBAQEBAQMBAQEBAgEBAQEBAQEBCAEBAgEBAQEBAQkBCAgBAwECAQEBAgEBAQkBAQEBAwECAQMBAQIBBwEFAQEDAQYBAQEBAgEBAQEBAQEBAQECAgEDAQECBAIDAgIBBQEEAQEBAwEPAQEBCyIBCAEJAwQBAQIBAQEBAgECAQEBAQMBAQEBAwEBAQEBAQEBAQgBAQMDAgEBAwEEAQIBAQEBBAEBAQEBAQECAQEBAQEBAQEBAQEHAQQBAwEBAQcBAgUBBgECAQYBAQwBAQEUAQELCAYBFgMFAQYDAQoBAQMBARQBAQkBAQoBBgEVAwsBCgIPAQ0BGQEBAgEHARQBAwIBBgEBAQUBBgQBAgEJAQEBBQECAQMHAQELAQECCQEQAQECAgECAQsBDAEBAQEBCgEBAQsBAQEECQ4BCAQCAQEECAEEAQEFCAEPAQEEAQEPAQgBFAEBAQEBAQEKAQEJAQ8BEAEBEwEBAQIBCwEBDgENAwEKAQEBAQELAQEBAQECAQwBCAEBAQEBDgEDAQwBAQECAQEXAQEBAQEHAgEBBQEIAQEBAQEQAgEBBQEUAQEBAQEbAQEBAQEGARQBAQEBARkBAQEBCQEBAQEQAQIBDwEBARQBAQEBBwEBAQkBAQEBAQECAQEBCwECAQEVAQEBAQQBBQEBAQEOAQEBAQEBEgEBFgEBAgEMAQEBAQ8BAQMBFgEBDgEBBQEPAQETAQECAQMOAgUBCgIBGQEBAQEIAQMBBwEBAwECEwgBAQcLAQUBFwEBAQEDAQEBBwEBBAEBDg0BAQwBAQEDAQQBAQEDBAEBBAEBAQEBEAEPAQgBAQsBAQ4BEQEMAgEBBwEOAQEHAQEBAQQBBAEDCwECAQEBAwEBBggBAgEBAREBBQMKAQEBAwQCEQEBHgEPAQIBAQYEAQYBAwEUAQUMAQEBAQEBAQECAQEBAgEIAwEBBgsBAgEODAMBAgEBCwEBAQEBAwECAQECAQEBBwgPAQ=="
    }
  ]
};

// https://jsr.io/@std/cli/1.0.0-rc.2/_run_length.ts
function runLengthDecode({ d, r }) {
  const data = atob(d);
  const runLengths = atob(r);
  let out = "";
  for (const [i, ch] of [...runLengths].entries()) {
    out += data[i].repeat(ch.codePointAt(0));
  }
  return Uint8Array.from([...out].map((x) => x.codePointAt(0)));
}

// https://jsr.io/@std/cli/1.0.0-rc.2/unicode_width.ts
var tables = null;
function lookupWidth(cp) {
  if (!tables)
    tables = data_default.tables.map(runLengthDecode);
  const t1Offset = tables[0][cp >> 13 & 255];
  const t2Offset = tables[1][128 * t1Offset + (cp >> 6 & 127)];
  const packedWidths = tables[2][16 * t2Offset + (cp >> 2 & 15)];
  const width = packedWidths >> 2 * (cp & 3) & 3;
  return width === 3 ? 1 : width;
}
var cache = /* @__PURE__ */ new Map();
function charWidth(char) {
  if (cache.has(char))
    return cache.get(char);
  const codePoint = char.codePointAt(0);
  let width = null;
  if (codePoint < 127) {
    width = codePoint >= 32 ? 1 : codePoint === 0 ? 0 : null;
  } else if (codePoint >= 160) {
    width = lookupWidth(codePoint);
  } else {
    width = null;
  }
  cache.set(char, width);
  return width;
}
function unicodeWidth(str) {
  return [...str].map((ch) => charWidth(ch) ?? 0).reduce((a, b) => a + b, 0);
}

// https://jsr.io/@cliffy/table/1.0.0-rc.5/_utils.ts
function longest(index, rows, maxWidth) {
  const cellLengths = rows.map((row) => {
    const cell = row[index];
    const cellValue = cell instanceof Cell && cell.getColSpan() > 1 ? "" : cell?.toString() || "";
    return cellValue.split("\n").map((line) => {
      const str = typeof maxWidth === "undefined" ? line : consumeWords(maxWidth, line);
      return strLength(str) || 0;
    });
  }).flat();
  return Math.max(...cellLengths);
}
var strLength = (str) => {
  return unicodeWidth(stripAnsiCode(str));
};
var ansiRegexSource = (
  // deno-lint-ignore no-control-regex
  /\x1b\[(?:(?<_0>0)|(?<_22>1|2|22)|(?<_23>3|23)|(?<_24>4|24)|(?<_27>7|27)|(?<_28>8|28)|(?<_29>9|29)|(?<_39>30|31|32|33|34|35|36|37|38;2;\d+;\d+;\d+|38;5;\d+|39|90|91|92|93|94|95|96|97)|(?<_49>40|41|42|43|44|45|46|47|48;2;\d+;\d+;\d+|48;5;\d+|49|100|101|102|103|104|105|106|107))m/.source
);
function getUnclosedAnsiRuns(text) {
  const tokens = [];
  for (const { groups } of text.matchAll(new RegExp(ansiRegexSource, "g"))) {
    const [_kind, content] = Object.entries(groups).find(([_, val]) => val);
    tokens.push({ kind: _kind.slice(1), content });
  }
  let unclosed = [];
  for (const token of tokens) {
    unclosed = [...unclosed.filter((y) => y.kind !== token.kind), token];
  }
  unclosed = unclosed.filter(({ content, kind }) => content !== kind);
  const currentSuffix = unclosed.map(({ kind }) => `\x1B[${kind}m`).reverse().join("");
  const nextPrefix = unclosed.map(({ content }) => `\x1B[${content}m`).join("");
  return {
    /** The suffix to be appended to the text to close all unclosed runs. */
    currentSuffix,
    /**
     * The prefix to be appended to the next segment to continue unclosed
     * runs if the input text forms the first segment of a multi-line string.
     */
    nextPrefix
  };
}

// https://jsr.io/@cliffy/table/1.0.0-rc.5/consume_words.ts
function consumeWords(length, content) {
  let consumed = "";
  const words = content.split("\n")[0]?.split(/ /g);
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (consumed) {
      const nextLength = strLength(word);
      const consumedLength = strLength(consumed);
      if (consumedLength + nextLength >= length) {
        break;
      }
    }
    consumed += (i > 0 ? " " : "") + word;
  }
  return consumed;
}
function consumeChars(length, content) {
  let consumed = "";
  const chars = [
    ...content.split("\n")[0].matchAll(
      new RegExp(`(?:${ansiRegexSource})+|.`, "gu")
    )
  ].map(([match2]) => match2);
  for (const char of chars) {
    if (consumed) {
      const nextLength = strLength(char);
      const consumedLength = strLength(consumed);
      if (consumedLength + nextLength > length) {
        break;
      }
    }
    consumed += char;
  }
  return consumed;
}

// https://jsr.io/@cliffy/table/1.0.0-rc.5/row.ts
var Row = class _Row extends Array {
  options = {};
  /**
   * Create a new row. If cells is a row, all cells and options of the row will
   * be copied to the new row.
   *
   * @param cells Cells or row.
   */
  static from(cells) {
    const row = new this(...cells);
    if (cells instanceof _Row) {
      row.options = { ...cells.options };
    }
    return row;
  }
  /** Clone row recursively with all options. */
  clone() {
    const row = new _Row(
      ...this.map((cell) => cell instanceof Cell ? cell.clone() : cell)
    );
    row.options = { ...this.options };
    return row;
  }
  /**
   * Setter:
   */
  /**
   * Enable/disable cell border.
   *
   * @param enable    Enable/disable cell border.
   * @param override  Override existing value.
   */
  border(enable = true, override = true) {
    if (override || typeof this.options.border === "undefined") {
      this.options.border = enable;
    }
    return this;
  }
  /**
   * Align row content.
   *
   * @param direction Align direction.
   * @param override  Override existing value.
   */
  align(direction, override = true) {
    if (override || typeof this.options.align === "undefined") {
      this.options.align = direction;
    }
    return this;
  }
  /**
   * Getter:
   */
  /** Check if row has border. */
  getBorder() {
    return this.options.border === true;
  }
  /** Check if row or any child cell has border. */
  hasBorder() {
    return this.getBorder() || this.some((cell) => cell instanceof Cell && cell.getBorder());
  }
  /** Get row alignment. */
  getAlign() {
    return this.options.align ?? "left";
  }
};

// https://jsr.io/@cliffy/table/1.0.0-rc.5/_layout.ts
var TableLayout = class {
  /**
   * Table layout constructor.
   * @param table   Table instance.
   * @param options Render options.
   */
  constructor(table, options) {
    this.table = table;
    this.options = options;
  }
  /** Generate table string. */
  toString() {
    const opts = this.createLayout();
    return opts.rows.length ? this.renderRows(opts) : "";
  }
  /**
   * Generates table layout including row and col span, converts all none
   * Cell/Row values to Cells and Rows and returns the layout rendering
   * settings.
   */
  createLayout() {
    Object.keys(this.options.chars).forEach((key) => {
      if (typeof this.options.chars[key] !== "string") {
        this.options.chars[key] = "";
      }
    });
    const hasBodyBorder = this.table.getBorder() || this.table.hasBodyBorder();
    const hasHeaderBorder = this.table.hasHeaderBorder();
    const hasBorder = hasHeaderBorder || hasBodyBorder;
    const rows = this.#getRows();
    const columns = Math.max(...rows.map((row) => row.length));
    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
      const row = rows[rowIndex];
      const length = row.length;
      if (length < columns) {
        const diff = columns - length;
        for (let i = 0; i < diff; i++) {
          row.push(this.createCell(null, row, rowIndex, length + i));
        }
      }
    }
    const padding = [];
    const width = [];
    for (let colIndex = 0; colIndex < columns; colIndex++) {
      const column = this.options.columns.at(colIndex);
      const minColWidth = column?.getMinWidth() ?? (Array.isArray(this.options.minColWidth) ? this.options.minColWidth[colIndex] : this.options.minColWidth);
      const maxColWidth = column?.getMaxWidth() ?? (Array.isArray(this.options.maxColWidth) ? this.options.maxColWidth[colIndex] : this.options.maxColWidth);
      const colWidth = longest(colIndex, rows, maxColWidth);
      width[colIndex] = Math.min(maxColWidth, Math.max(minColWidth, colWidth));
      padding[colIndex] = column?.getPadding() ?? (Array.isArray(this.options.padding) ? this.options.padding[colIndex] : this.options.padding);
    }
    return {
      padding,
      width,
      rows,
      columns,
      hasBorder,
      hasBodyBorder,
      hasHeaderBorder
    };
  }
  #getRows() {
    const header = this.table.getHeader();
    const rows = header ? [header, ...this.table] : this.table.slice();
    const hasSpan = rows.some(
      (row) => row.some(
        (cell) => cell instanceof Cell && (cell.getColSpan() > 1 || cell.getRowSpan() > 1)
      )
    );
    if (hasSpan) {
      return this.spanRows(rows);
    }
    return rows.map((row, rowIndex) => {
      const newRow = this.createRow(row);
      for (let colIndex = 0; colIndex < row.length; colIndex++) {
        newRow[colIndex] = this.createCell(
          row[colIndex],
          newRow,
          rowIndex,
          colIndex
        );
      }
      return newRow;
    });
  }
  /**
   * Fills rows and cols by specified row/col span with a reference of the
   * original cell.
   */
  spanRows(rows) {
    const rowSpan = [];
    let colSpan = 1;
    let rowIndex = -1;
    while (true) {
      rowIndex++;
      if (rowIndex === rows.length && rowSpan.every((span) => span === 1)) {
        break;
      }
      const row = rows[rowIndex] = this.createRow(rows[rowIndex] || []);
      let colIndex = -1;
      while (true) {
        colIndex++;
        if (colIndex === row.length && colIndex === rowSpan.length && colSpan === 1) {
          break;
        }
        if (colSpan > 1) {
          colSpan--;
          rowSpan[colIndex] = rowSpan[colIndex - 1];
          row.splice(
            colIndex,
            this.getDeleteCount(rows, rowIndex, colIndex),
            row[colIndex - 1]
          );
          continue;
        }
        if (rowSpan[colIndex] > 1) {
          rowSpan[colIndex]--;
          rows[rowIndex].splice(
            colIndex,
            this.getDeleteCount(rows, rowIndex, colIndex),
            rows[rowIndex - 1][colIndex]
          );
          continue;
        }
        const cell = row[colIndex] = this.createCell(
          row[colIndex] || null,
          row,
          rowIndex,
          colIndex
        );
        colSpan = cell.getColSpan();
        rowSpan[colIndex] = cell.getRowSpan();
      }
    }
    return rows;
  }
  getDeleteCount(rows, rowIndex, colIndex) {
    return colIndex <= rows[rowIndex].length - 1 && typeof rows[rowIndex][colIndex] === "undefined" ? 1 : 0;
  }
  /**
   * Create a new row from existing row or cell array.
   * @param row Original row.
   */
  createRow(row) {
    return Row.from(row).border(this.table.getBorder(), false).align(this.table.getAlign(), false);
  }
  /**
   * Create a new cell from existing cell or cell value.
   *
   * @param cell      Original cell.
   * @param row       Parent row.
   * @param rowIndex  The row index of the cell.
   * @param colIndex  The column index of the cell.
   */
  createCell(cell, row, rowIndex, colIndex) {
    const column = this.options.columns.at(colIndex);
    const isHeaderRow = this.isHeaderRow(rowIndex);
    return Cell.from(cell ?? "").border(
      (isHeaderRow ? null : column?.getBorder()) ?? row.getBorder(),
      false
    ).align(
      (isHeaderRow ? null : column?.getAlign()) ?? row.getAlign(),
      false
    );
  }
  isHeaderRow(rowIndex) {
    return rowIndex === 0 && this.table.getHeader() !== void 0;
  }
  /**
   * Render table layout.
   * @param opts Render options.
   */
  renderRows(opts) {
    let result = "";
    const rowSpan = new Array(opts.columns).fill(1);
    for (let rowIndex = 0; rowIndex < opts.rows.length; rowIndex++) {
      result += this.renderRow(rowSpan, rowIndex, opts);
    }
    return result.slice(0, -1);
  }
  /**
   * Render row.
   * @param rowSpan     Current row span.
   * @param rowIndex    Current row index.
   * @param opts        Render options.
   * @param isMultiline Is multiline row.
   */
  renderRow(rowSpan, rowIndex, opts, isMultiline) {
    const row = opts.rows[rowIndex];
    const prevRow = opts.rows[rowIndex - 1];
    const nextRow = opts.rows[rowIndex + 1];
    let result = "";
    let colSpan = 1;
    if (!isMultiline && rowIndex === 0 && row.hasBorder()) {
      result += this.renderBorderRow(void 0, row, rowSpan, opts);
    }
    let isMultilineRow = false;
    result += " ".repeat(this.options.indent || 0);
    for (let colIndex = 0; colIndex < opts.columns; colIndex++) {
      if (colSpan > 1) {
        colSpan--;
        rowSpan[colIndex] = rowSpan[colIndex - 1];
        continue;
      }
      result += this.renderCell(colIndex, row, opts);
      if (rowSpan[colIndex] > 1) {
        if (!isMultiline) {
          rowSpan[colIndex]--;
        }
      } else if (!prevRow || prevRow[colIndex] !== row[colIndex]) {
        rowSpan[colIndex] = row[colIndex].getRowSpan();
      }
      colSpan = row[colIndex].getColSpan();
      if (rowSpan[colIndex] === 1 && row[colIndex].length) {
        isMultilineRow = true;
      }
    }
    if (opts.columns > 0) {
      if (row[opts.columns - 1].getBorder()) {
        result += this.options.chars.right;
      } else if (opts.hasBorder) {
        result += " ";
      }
    }
    result += "\n";
    if (isMultilineRow) {
      return result + this.renderRow(rowSpan, rowIndex, opts, isMultilineRow);
    }
    if (opts.rows.length > 1 && (rowIndex === 0 && opts.hasHeaderBorder || rowIndex < opts.rows.length - 1 && opts.hasBodyBorder)) {
      result += this.renderBorderRow(row, nextRow, rowSpan, opts);
    }
    if (rowIndex === opts.rows.length - 1 && row.hasBorder()) {
      result += this.renderBorderRow(row, void 0, rowSpan, opts);
    }
    return result;
  }
  /**
   * Render cell.
   * @param colIndex  Current col index.
   * @param row       Current row.
   * @param opts      Render options.
   * @param noBorder  Disable border.
   */
  renderCell(colIndex, row, opts, noBorder) {
    let result = "";
    const prevCell = row[colIndex - 1];
    const cell = row[colIndex];
    if (!noBorder) {
      if (colIndex === 0) {
        if (cell.getBorder()) {
          result += this.options.chars.left;
        } else if (opts.hasBorder) {
          result += " ";
        }
      } else {
        if (cell.getBorder() || prevCell?.getBorder()) {
          result += this.options.chars.middle;
        } else if (opts.hasBorder) {
          result += " ";
        }
      }
    }
    let maxLength = opts.width[colIndex];
    const colSpan = cell.getColSpan();
    if (colSpan > 1) {
      for (let o = 1; o < colSpan; o++) {
        maxLength += opts.width[colIndex + o] + opts.padding[colIndex + o];
        if (opts.hasBorder) {
          maxLength += opts.padding[colIndex + o] + 1;
        }
      }
    }
    const { current, next } = this.renderCellValue(cell, maxLength);
    row[colIndex].setValue(next);
    if (opts.hasBorder) {
      result += " ".repeat(opts.padding[colIndex]);
    }
    result += current;
    if (opts.hasBorder || colIndex < opts.columns - 1) {
      result += " ".repeat(opts.padding[colIndex]);
    }
    return result;
  }
  /**
   * Render specified length of cell. Returns the rendered value and a new cell
   * with the rest value.
   * @param cell      Cell to render.
   * @param maxLength Max length of content to render.
   */
  renderCellValue(cell, maxLength) {
    const length = Math.min(
      maxLength,
      strLength(cell.toString())
    );
    let words = consumeWords(length, cell.toString());
    const breakWord = strLength(words) > length;
    if (breakWord) {
      words = consumeChars(length, words);
    }
    const next = cell.toString().slice(words.length + (breakWord ? 0 : 1));
    words = cell.unclosedAnsiRuns + words;
    const { currentSuffix, nextPrefix } = getUnclosedAnsiRuns(words);
    words += currentSuffix;
    cell.unclosedAnsiRuns = nextPrefix;
    const fillLength = maxLength - strLength(words);
    const align = cell.getAlign();
    let current;
    if (fillLength === 0) {
      current = words;
    } else if (align === "left") {
      current = words + " ".repeat(fillLength);
    } else if (align === "center") {
      current = " ".repeat(Math.floor(fillLength / 2)) + words + " ".repeat(Math.ceil(fillLength / 2));
    } else if (align === "right") {
      current = " ".repeat(fillLength) + words;
    } else {
      throw new Error("Unknown direction: " + align);
    }
    return { current, next };
  }
  /**
   * Render border row.
   * @param prevRow Previous row.
   * @param nextRow Next row.
   * @param rowSpan Current row span.
   * @param opts    Render options.
   */
  renderBorderRow(prevRow, nextRow, rowSpan, opts) {
    let result = "";
    let colSpan = 1;
    for (let colIndex = 0; colIndex < opts.columns; colIndex++) {
      if (rowSpan[colIndex] > 1) {
        if (!nextRow) {
          throw new Error("invalid layout");
        }
        if (colSpan > 1) {
          colSpan--;
          continue;
        }
      }
      result += this.renderBorderCell(
        colIndex,
        prevRow,
        nextRow,
        rowSpan,
        opts
      );
      colSpan = nextRow?.[colIndex].getColSpan() ?? 1;
    }
    return result.length ? " ".repeat(this.options.indent) + result + "\n" : "";
  }
  /**
   * Render border cell.
   * @param colIndex  Current index.
   * @param prevRow   Previous row.
   * @param nextRow   Next row.
   * @param rowSpan   Current row span.
   * @param opts      Render options.
   */
  renderBorderCell(colIndex, prevRow, nextRow, rowSpan, opts) {
    const a1 = prevRow?.[colIndex - 1];
    const a2 = nextRow?.[colIndex - 1];
    const b1 = prevRow?.[colIndex];
    const b2 = nextRow?.[colIndex];
    const a1Border = !!a1?.getBorder();
    const a2Border = !!a2?.getBorder();
    const b1Border = !!b1?.getBorder();
    const b2Border = !!b2?.getBorder();
    const hasColSpan = (cell) => (cell?.getColSpan() ?? 1) > 1;
    const hasRowSpan = (cell) => (cell?.getRowSpan() ?? 1) > 1;
    let result = "";
    if (colIndex === 0) {
      if (rowSpan[colIndex] > 1) {
        if (b1Border) {
          result += this.options.chars.left;
        } else {
          result += " ";
        }
      } else if (b1Border && b2Border) {
        result += this.options.chars.leftMid;
      } else if (b1Border) {
        result += this.options.chars.bottomLeft;
      } else if (b2Border) {
        result += this.options.chars.topLeft;
      } else {
        result += " ";
      }
    } else if (colIndex < opts.columns) {
      if (a1Border && b2Border || b1Border && a2Border) {
        const a1ColSpan = hasColSpan(a1);
        const a2ColSpan = hasColSpan(a2);
        const b1ColSpan = hasColSpan(b1);
        const b2ColSpan = hasColSpan(b2);
        const a1RowSpan = hasRowSpan(a1);
        const a2RowSpan = hasRowSpan(a2);
        const b1RowSpan = hasRowSpan(b1);
        const b2RowSpan = hasRowSpan(b2);
        const hasAllBorder = a1Border && b2Border && b1Border && a2Border;
        const hasAllRowSpan = a1RowSpan && b1RowSpan && a2RowSpan && b2RowSpan;
        const hasAllColSpan = a1ColSpan && b1ColSpan && a2ColSpan && b2ColSpan;
        if (hasAllRowSpan && hasAllBorder) {
          result += this.options.chars.middle;
        } else if (hasAllColSpan && hasAllBorder && a1 === b1 && a2 === b2) {
          result += this.options.chars.mid;
        } else if (a1ColSpan && b1ColSpan && a1 === b1) {
          result += this.options.chars.topMid;
        } else if (a2ColSpan && b2ColSpan && a2 === b2) {
          result += this.options.chars.bottomMid;
        } else if (a1RowSpan && a2RowSpan && a1 === a2) {
          result += this.options.chars.leftMid;
        } else if (b1RowSpan && b2RowSpan && b1 === b2) {
          result += this.options.chars.rightMid;
        } else {
          result += this.options.chars.midMid;
        }
      } else if (a1Border && b1Border) {
        if (hasColSpan(a1) && hasColSpan(b1) && a1 === b1) {
          result += this.options.chars.bottom;
        } else {
          result += this.options.chars.bottomMid;
        }
      } else if (b1Border && b2Border) {
        if (rowSpan[colIndex] > 1) {
          result += this.options.chars.left;
        } else {
          result += this.options.chars.leftMid;
        }
      } else if (b2Border && a2Border) {
        if (hasColSpan(a2) && hasColSpan(b2) && a2 === b2) {
          result += this.options.chars.top;
        } else {
          result += this.options.chars.topMid;
        }
      } else if (a1Border && a2Border) {
        if (hasRowSpan(a1) && a1 === a2) {
          result += this.options.chars.right;
        } else {
          result += this.options.chars.rightMid;
        }
      } else if (a1Border) {
        result += this.options.chars.bottomRight;
      } else if (b1Border) {
        result += this.options.chars.bottomLeft;
      } else if (a2Border) {
        result += this.options.chars.topRight;
      } else if (b2Border) {
        result += this.options.chars.topLeft;
      } else {
        result += " ";
      }
    }
    const length = opts.padding[colIndex] + opts.width[colIndex] + opts.padding[colIndex];
    if (rowSpan[colIndex] > 1 && nextRow) {
      result += this.renderCell(
        colIndex,
        nextRow,
        opts,
        true
      );
      if (nextRow[colIndex] === nextRow[nextRow.length - 1]) {
        if (b1Border) {
          result += this.options.chars.right;
        } else {
          result += " ";
        }
        return result;
      }
    } else if (b1Border && b2Border) {
      result += this.options.chars.mid.repeat(length);
    } else if (b1Border) {
      result += this.options.chars.bottom.repeat(length);
    } else if (b2Border) {
      result += this.options.chars.top.repeat(length);
    } else {
      result += " ".repeat(length);
    }
    if (colIndex === opts.columns - 1) {
      if (b1Border && b2Border) {
        result += this.options.chars.rightMid;
      } else if (b1Border) {
        result += this.options.chars.bottomRight;
      } else if (b2Border) {
        result += this.options.chars.topRight;
      } else {
        result += " ";
      }
    }
    return result;
  }
};

// https://jsr.io/@cliffy/table/1.0.0-rc.5/table.ts
var Table = class _Table extends Array {
  static _chars = { ...border };
  options = {
    indent: 0,
    border: false,
    maxColWidth: Infinity,
    minColWidth: 0,
    padding: 1,
    chars: { ..._Table._chars },
    columns: []
  };
  headerRow;
  /**
   * Create a new table. If rows is a table, all rows and options of the table
   * will be copied to the new table.
   *
   * @param rows An array of rows or a table instance.
   */
  static from(rows) {
    const table = new this(...rows);
    if (rows instanceof _Table) {
      table.options = { ...rows.options };
      table.headerRow = rows.headerRow ? Row.from(rows.headerRow) : void 0;
    }
    return table;
  }
  /**
   * Create a new table from an array of json objects. An object represents a
   * row and each property a column.
   *
   * @param rows Array of objects.
   */
  static fromJson(rows) {
    return new this().fromJson(rows);
  }
  /**
   * Set global default border characters.
   *
   * @param chars Border options.
   */
  static chars(chars) {
    Object.assign(this._chars, chars);
    return this;
  }
  /**
   * Write table or rows to stdout.
   *
   * @param rows Table or rows.
   */
  static render(rows) {
    _Table.from(rows).render();
  }
  /**
   * Read data from an array of json objects. An object represents a
   * row and each property a column.
   *
   * @param rows Array of objects.
   */
  fromJson(rows) {
    this.header(Object.keys(rows[0]));
    this.body(rows.map((row) => Object.values(row)));
    return this;
  }
  /**
   * Set column options.
   *
   * @param columns An array of columns or column options.
   */
  columns(columns) {
    this.options.columns = columns.map(
      (column) => column instanceof Column ? column : Column.from(column)
    );
    return this;
  }
  /**
   * Set column options by index.
   *
   @param index   The column index.
   @param column  Column or column options.
   */
  column(index, column) {
    if (column instanceof Column) {
      this.options.columns[index] = column;
    } else if (this.options.columns[index]) {
      this.options.columns[index].options(column);
    } else {
      this.options.columns[index] = Column.from(column);
    }
    return this;
  }
  /**
   * Set table header.
   *
   * @param header Header row or cells.
   */
  header(header) {
    this.headerRow = header instanceof Row ? header : Row.from(header);
    return this;
  }
  /**
   * Set table body.
   *
   * @param rows Array of rows.
   */
  body(rows) {
    this.length = 0;
    this.push(...rows);
    return this;
  }
  /** Clone table recursively with header and options. */
  clone() {
    const table = new _Table(
      ...this.map(
        (row) => row instanceof Row ? row.clone() : Row.from(row).clone()
      )
    );
    table.options = { ...this.options };
    table.headerRow = this.headerRow?.clone();
    return table;
  }
  /** Generate table string. */
  toString() {
    return new TableLayout(this, this.options).toString();
  }
  /** Write table to stdout. */
  render() {
    console.log(this.toString());
    return this;
  }
  /**
   * Set max column width.
   *
   * @param width     Max column width.
   * @param override  Override existing value.
   */
  maxColWidth(width, override = true) {
    if (override || typeof this.options.maxColWidth === "undefined") {
      this.options.maxColWidth = width;
    }
    return this;
  }
  /**
   * Set min column width.
   *
   * @param width     Min column width.
   * @param override  Override existing value.
   */
  minColWidth(width, override = true) {
    if (override || typeof this.options.minColWidth === "undefined") {
      this.options.minColWidth = width;
    }
    return this;
  }
  /**
   * Set table indentation.
   *
   * @param width     Indent width.
   * @param override  Override existing value.
   */
  indent(width, override = true) {
    if (override || typeof this.options.indent === "undefined") {
      this.options.indent = width;
    }
    return this;
  }
  /**
   * Set cell padding.
   *
   * @param padding   Cell padding.
   * @param override  Override existing value.
   */
  padding(padding, override = true) {
    if (override || typeof this.options.padding === "undefined") {
      this.options.padding = padding;
    }
    return this;
  }
  /**
   * Enable/disable cell border.
   *
   * @param enable    Enable/disable cell border.
   * @param override  Override existing value.
   */
  border(enable = true, override = true) {
    if (override || typeof this.options.border === "undefined") {
      this.options.border = enable;
    }
    return this;
  }
  /**
   * Align table content.
   *
   * @param direction Align direction.
   * @param override  Override existing value.
   */
  align(direction, override = true) {
    if (override || typeof this.options.align === "undefined") {
      this.options.align = direction;
    }
    return this;
  }
  /**
   * Set border characters.
   *
   * @param chars Border options.
   */
  chars(chars) {
    Object.assign(this.options.chars, chars);
    return this;
  }
  /** Get table header. */
  getHeader() {
    return this.headerRow;
  }
  /** Get table body. */
  getBody() {
    return [...this];
  }
  /** Get max column width. */
  getMaxColWidth() {
    return this.options.maxColWidth;
  }
  /** Get min column width. */
  getMinColWidth() {
    return this.options.minColWidth;
  }
  /** Get table indentation. */
  getIndent() {
    return this.options.indent;
  }
  /** Get cell padding. */
  getPadding() {
    return this.options.padding;
  }
  /** Check if table has border. */
  getBorder() {
    return this.options.border === true;
  }
  /** Check if header row has border. */
  hasHeaderBorder() {
    const hasBorder = this.headerRow?.hasBorder();
    return hasBorder === true || this.getBorder() && hasBorder !== false;
  }
  /** Check if table bordy has border. */
  hasBodyBorder() {
    return this.getBorder() || this.options.columns.some((column) => column.getBorder()) || this.some(
      (row) => row instanceof Row ? row.hasBorder() : row.some((cell) => cell instanceof Cell ? cell.getBorder() : false)
    );
  }
  /** Check if table header or body has border. */
  hasBorder() {
    return this.hasHeaderBorder() || this.hasBodyBorder();
  }
  /** Get table alignment. */
  getAlign() {
    return this.options.align ?? "left";
  }
  /** Get columns. */
  getColumns() {
    return this.options.columns;
  }
  /** Get column by column index. */
  getColumn(index) {
    return this.options.columns[index] ??= new Column();
  }
};

// https://jsr.io/@cliffy/command/1.0.0-rc.5/help/_help_generator.ts
init_colors();

// https://jsr.io/@cliffy/internal/1.0.0-rc.5/runtime/inspect.ts
function inspect(value, colors2) {
  const { Deno: Deno4 } = globalThis;
  return Deno4?.inspect(
    value,
    { depth: 1, colors: colors2, trailingComma: false }
  ) ?? JSON.stringify(value, null, 2);
}

// https://jsr.io/@cliffy/command/1.0.0-rc.5/type.ts
var Type = class {
};

// https://jsr.io/@cliffy/command/1.0.0-rc.5/help/_help_generator.ts
var HelpGenerator = class _HelpGenerator {
  constructor(cmd, options = {}) {
    this.cmd = cmd;
    this.options = {
      types: false,
      hints: true,
      colors: true,
      long: false,
      ...options
    };
  }
  indent = 2;
  options;
  /** Generate help text for given command. */
  static generate(cmd, options) {
    return new _HelpGenerator(cmd, options).generate();
  }
  generate() {
    const areColorsEnabled = getColorEnabled();
    setColorEnabled(this.options.colors);
    const result = this.generateHeader() + this.generateMeta() + this.generateDescription() + this.generateOptions() + this.generateCommands() + this.generateEnvironmentVariables() + this.generateExamples();
    setColorEnabled(areColorsEnabled);
    return result;
  }
  generateHeader() {
    const usage = this.cmd.getUsage();
    const rows = [
      [
        bold("Usage:"),
        brightMagenta(
          this.cmd.getPath() + (usage ? " " + highlightArguments(usage, this.options.types) : "")
        )
      ]
    ];
    const version = this.cmd.getVersion();
    if (version) {
      rows.push([bold("Version:"), yellow(`${this.cmd.getVersion()}`)]);
    }
    return "\n" + Table.from(rows).padding(1).toString() + "\n";
  }
  generateMeta() {
    const meta = Object.entries(this.cmd.getMeta());
    if (!meta.length) {
      return "";
    }
    const rows = [];
    for (const [name, value] of meta) {
      rows.push([bold(`${name}: `) + value]);
    }
    return "\n" + Table.from(rows).padding(1).toString() + "\n";
  }
  generateDescription() {
    if (!this.cmd.getDescription()) {
      return "";
    }
    return this.label("Description") + Table.from([
      [dedent(this.cmd.getDescription())]
    ]).indent(this.indent).maxColWidth(140).padding(1).toString() + "\n";
  }
  generateOptions() {
    const options = this.cmd.getOptions(false);
    if (!options.length) {
      return "";
    }
    let groups = [];
    const hasGroups = options.some((option) => option.groupName);
    if (hasGroups) {
      for (const option of options) {
        let group = groups.find((group2) => group2.name === option.groupName);
        if (!group) {
          group = {
            name: option.groupName,
            options: []
          };
          groups.push(group);
        }
        group.options.push(option);
      }
    } else {
      groups = [{
        name: "Options",
        options
      }];
    }
    let result = "";
    for (const group of groups) {
      result += this.generateOptionGroup(group);
    }
    return result;
  }
  generateOptionGroup(group) {
    if (!group.options.length) {
      return "";
    }
    const hasTypeDefinitions = !!group.options.find(
      (option) => !!option.typeDefinition
    );
    if (hasTypeDefinitions) {
      return this.label(group.name ?? "Options") + Table.from([
        ...group.options.map((option) => [
          option.flags.map((flag) => brightBlue(flag)).join(", "),
          highlightArguments(
            option.typeDefinition || "",
            this.options.types
          ),
          red(bold("-")),
          getDescription(option.description, !this.options.long),
          this.generateHints(option)
        ])
      ]).padding([2, 2, 1, 2]).indent(this.indent).maxColWidth([60, 60, 1, 80, 60]).toString() + "\n";
    }
    return this.label(group.name ?? "Options") + Table.from([
      ...group.options.map((option) => [
        option.flags.map((flag) => brightBlue(flag)).join(", "),
        red(bold("-")),
        getDescription(option.description, !this.options.long),
        this.generateHints(option)
      ])
    ]).indent(this.indent).maxColWidth([60, 1, 80, 60]).padding([2, 1, 2]).toString() + "\n";
  }
  generateCommands() {
    const commands = this.cmd.getCommands(false);
    if (!commands.length) {
      return "";
    }
    const hasTypeDefinitions = !!commands.find(
      (command) => !!command.getArgsDefinition()
    );
    if (hasTypeDefinitions) {
      return this.label("Commands") + Table.from([
        ...commands.map((command) => [
          [command.getName(), ...command.getAliases()].map(
            (name) => brightBlue(name)
          ).join(", "),
          highlightArguments(
            command.getArgsDefinition() || "",
            this.options.types
          ),
          red(bold("-")),
          command.getShortDescription()
        ])
      ]).indent(this.indent).maxColWidth([60, 60, 1, 80]).padding([2, 2, 1, 2]).toString() + "\n";
    }
    return this.label("Commands") + Table.from([
      ...commands.map((command) => [
        [command.getName(), ...command.getAliases()].map(
          (name) => brightBlue(name)
        ).join(", "),
        red(bold("-")),
        command.getShortDescription()
      ])
    ]).maxColWidth([60, 1, 80]).padding([2, 1, 2]).indent(this.indent).toString() + "\n";
  }
  generateEnvironmentVariables() {
    const envVars = this.cmd.getEnvVars(false);
    if (!envVars.length) {
      return "";
    }
    return this.label("Environment variables") + Table.from([
      ...envVars.map((envVar) => [
        envVar.names.map((name) => brightBlue(name)).join(", "),
        highlightArgumentDetails(
          envVar.details,
          this.options.types
        ),
        red(bold("-")),
        this.options.long ? dedent(envVar.description) : envVar.description.trim().split("\n", 1)[0],
        envVar.required ? `(${yellow(`required`)})` : ""
      ])
    ]).padding([2, 2, 1, 2]).indent(this.indent).maxColWidth([60, 60, 1, 80, 10]).toString() + "\n";
  }
  generateExamples() {
    const examples = this.cmd.getExamples();
    if (!examples.length) {
      return "";
    }
    return this.label("Examples") + Table.from(examples.map((example) => [
      dim(bold(`${capitalize(example.name)}:`)),
      dedent(example.description)
    ])).padding(1).indent(this.indent).maxColWidth(150).toString() + "\n";
  }
  generateHints(option) {
    if (!this.options.hints) {
      return "";
    }
    const hints = [];
    option.required && hints.push(yellow(`required`));
    if (typeof option.default !== "undefined") {
      const defaultValue = typeof option.default === "function" ? option.default() : option.default;
      if (typeof defaultValue !== "undefined") {
        hints.push(
          bold(`Default: `) + inspect(defaultValue, this.options.colors)
        );
      }
    }
    option.depends?.length && hints.push(
      yellow(bold(`Depends: `)) + italic(option.depends.map(getFlag2).join(", "))
    );
    option.conflicts?.length && hints.push(
      red(bold(`Conflicts: `)) + italic(option.conflicts.map(getFlag2).join(", "))
    );
    const type = this.cmd.getType(option.args[0]?.type)?.handler;
    if (type instanceof Type) {
      const possibleValues = type.values?.(this.cmd, this.cmd.getParent());
      if (possibleValues?.length) {
        hints.push(
          bold(`Values: `) + possibleValues.map(
            (value) => inspect(value, this.options.colors)
          ).join(", ")
        );
      }
    }
    if (hints.length) {
      return `(${hints.join(", ")})`;
    }
    return "";
  }
  label(label) {
    return "\n" + bold(`${label}:`) + "\n\n";
  }
};
function capitalize(string2) {
  return string2.charAt(0).toUpperCase() + string2.slice(1);
}
function highlightArguments(argsDefinition, types = true) {
  if (!argsDefinition) {
    return "";
  }
  return parseArgumentsDefinition(argsDefinition, false, true).map(
    (arg) => typeof arg === "string" ? arg : highlightArgumentDetails(arg, types)
  ).join(" ");
}
function highlightArgumentDetails(arg, types = true) {
  let str = "";
  str += yellow(arg.optional ? "[" : "<");
  let name = "";
  name += arg.name;
  if (arg.variadic) {
    name += "...";
  }
  name = brightMagenta(name);
  str += name;
  if (types) {
    str += yellow(":");
    str += red(arg.type);
    if (arg.list) {
      str += green("[]");
    }
  }
  str += yellow(arg.optional ? "]" : ">");
  return str;
}

// https://jsr.io/@cliffy/command/1.0.0-rc.5/types/boolean.ts
var BooleanType = class extends Type {
  /** Parse boolean type. */
  parse(type) {
    return boolean(type);
  }
  /** Complete boolean type. */
  complete() {
    return ["true", "false"];
  }
};

// https://jsr.io/@cliffy/command/1.0.0-rc.5/types/string.ts
var StringType = class extends Type {
  /** Complete string type. */
  parse(type) {
    return string(type);
  }
};

// https://jsr.io/@cliffy/command/1.0.0-rc.5/types/file.ts
var FileType = class extends StringType {
  constructor() {
    super();
  }
  // getOptions(): FileTypeOptions {
  //   return this.opts;
  // }
};

// https://jsr.io/@cliffy/command/1.0.0-rc.5/types/integer.ts
var IntegerType = class extends Type {
  /** Parse integer type. */
  parse(type) {
    return integer(type);
  }
};

// https://jsr.io/@cliffy/command/1.0.0-rc.5/types/number.ts
var NumberType = class extends Type {
  /** Parse number type. */
  parse(type) {
    return number(type);
  }
};

// https://jsr.io/@cliffy/command/1.0.0-rc.5/upgrade/_check_version.ts
init_colors();
async function checkVersion(cmd) {
  const mainCommand = cmd.getMainCommand();
  const upgradeCommand = mainCommand.getCommand("upgrade");
  if (!isUpgradeCommand(upgradeCommand)) {
    return;
  }
  const latestVersion = await upgradeCommand.getLatestVersion();
  const currentVersion = mainCommand.getVersion();
  if (currentVersion === latestVersion) {
    return;
  }
  const versionHelpText = `(New version available: ${latestVersion}. Run '${mainCommand.getName()} upgrade' to upgrade to the latest version!)`;
  mainCommand.version(`${currentVersion}  ${bold(yellow(versionHelpText))}`);
}
function isUpgradeCommand(command) {
  return command instanceof Command && "getLatestVersion" in command;
}

// https://jsr.io/@cliffy/command/1.0.0-rc.5/command.ts
var Command = class _Command {
  types = /* @__PURE__ */ new Map();
  rawArgs = [];
  literalArgs = [];
  _name = "COMMAND";
  _parent;
  _globalParent;
  ver;
  desc = "";
  _usage;
  actionHandler;
  globalActionHandler;
  options = [];
  commands = /* @__PURE__ */ new Map();
  examples = [];
  envVars = [];
  aliases = [];
  completions = /* @__PURE__ */ new Map();
  cmd = this;
  argsDefinition;
  throwOnError = false;
  _allowEmpty = false;
  _stopEarly = false;
  defaultCommand;
  _useRawArgs = false;
  args = [];
  isHidden = false;
  isGlobal = false;
  hasDefaults = false;
  _versionOptions;
  _helpOptions;
  _versionOption;
  _helpOption;
  _help;
  _shouldExit;
  _meta = {};
  _groupName = null;
  _noGlobals = false;
  errorHandler;
  versionOption(flags, desc, opts) {
    this._versionOptions = flags === false ? flags : {
      flags,
      desc,
      opts: typeof opts === "function" ? { action: opts } : opts
    };
    return this;
  }
  helpOption(flags, desc, opts) {
    this._helpOptions = flags === false ? flags : {
      flags,
      desc,
      opts: typeof opts === "function" ? { action: opts } : opts
    };
    return this;
  }
  /**
   * Add new sub-command.
   * @param nameAndArguments  Command definition. E.g: `my-command <input-file:string> <output-file:string>`
   * @param cmdOrDescription  The description of the new child command.
   * @param override          Override existing child command.
   */
  command(nameAndArguments, cmdOrDescription, override) {
    this.reset();
    const result = splitArguments(nameAndArguments);
    const name = result.flags.shift();
    const aliases = result.flags;
    if (!name) {
      throw new MissingCommandNameError();
    }
    if (this.getBaseCommand(name, true)) {
      if (!override) {
        throw new DuplicateCommandNameError(name);
      }
      this.removeCommand(name);
    }
    let description;
    let cmd;
    if (typeof cmdOrDescription === "string") {
      description = cmdOrDescription;
    }
    if (cmdOrDescription instanceof _Command) {
      cmd = cmdOrDescription.reset();
    } else {
      cmd = new _Command();
    }
    cmd._name = name;
    cmd._parent = this;
    if (description) {
      cmd.description(description);
    }
    if (result.typeDefinition) {
      cmd.arguments(result.typeDefinition);
    }
    aliases.forEach((alias) => cmd.alias(alias));
    this.commands.set(name, cmd);
    this.select(name);
    return this;
  }
  /**
   * Add new command alias.
   *
   * @param alias Tha name of the alias.
   */
  alias(alias) {
    if (this.cmd._name === alias || this.cmd.aliases.includes(alias)) {
      throw new DuplicateCommandAliasError(alias);
    }
    this.cmd.aliases.push(alias);
    return this;
  }
  /** Reset internal command reference to main command. */
  reset() {
    this._groupName = null;
    this.cmd = this;
    return this;
  }
  /**
   * Set internal command pointer to child command with given name.
   * @param name The name of the command to select.
   */
  select(name) {
    const cmd = this.getBaseCommand(name, true);
    if (!cmd) {
      throw new CommandNotFoundError(name, this.getBaseCommands(true));
    }
    this.cmd = cmd;
    return this;
  }
  /*****************************************************************************
   **** SUB HANDLER ************************************************************
   *****************************************************************************/
  /** Set command name. Used in auto generated help and shell completions */
  name(name) {
    this.cmd._name = name;
    return this;
  }
  /**
   * Set command version.
   *
   * @param version Semantic version string string or method that returns the version string.
   */
  version(version) {
    if (typeof version === "string") {
      this.cmd.ver = () => version;
    } else if (typeof version === "function") {
      this.cmd.ver = version;
    }
    return this;
  }
  /**
   * Add meta data. Will be displayed in the auto generated help and in the
   * output of the long version.
   *
   * @param name  The name/label of the metadata.
   * @param value The value of the metadata.
   */
  meta(name, value) {
    this.cmd._meta[name] = value;
    return this;
  }
  getMeta(name) {
    return typeof name === "undefined" ? this._meta : this._meta[name];
  }
  /**
   * Set command help.
   *
   * @param help Help string, method, or config for generator that returns the help string.
   */
  help(help) {
    if (typeof help === "string") {
      this.cmd._help = () => help;
    } else if (typeof help === "function") {
      this.cmd._help = help;
    } else {
      this.cmd._help = (cmd, options) => HelpGenerator.generate(cmd, { ...help, ...options });
    }
    return this;
  }
  /**
   * Set the long command description.
   *
   * @param description The command description.
   */
  description(description) {
    this.cmd.desc = description;
    return this;
  }
  /**
   * Set the command usage. Defaults to arguments.
   *
   * @param usage The command usage.
   */
  usage(usage) {
    this.cmd._usage = usage;
    return this;
  }
  /** Hide command from help, completions, etc. */
  hidden() {
    this.cmd.isHidden = true;
    return this;
  }
  /** Make command globally available. */
  global() {
    this.cmd.isGlobal = true;
    return this;
  }
  /**
   * Set command arguments.
   *
   * Syntax: `<requiredArg:string> [optionalArg: number] [...restArgs:string]`
   */
  arguments(args) {
    this.cmd.argsDefinition = args;
    return this;
  }
  /**
   * Set command callback method.
   *
   * @param fn Command action handler.
   */
  action(fn) {
    this.cmd.actionHandler = fn;
    return this;
  }
  /**
   * Set command callback method.
   *
   * @param fn Command action handler.
   */
  globalAction(fn) {
    this.cmd.globalActionHandler = fn;
    return this;
  }
  /**
   * Don't throw an error if the command was called without arguments.
   *
   * @param allowEmpty Enable/disable allow empty.
   */
  allowEmpty(allowEmpty) {
    this.cmd._allowEmpty = allowEmpty !== false;
    return this;
  }
  /**
   * Enable stop early. If enabled, all arguments starting from the first non
   * option argument will be passed as arguments with type string to the command
   * action handler.
   *
   * For example:
   *     `command --debug-level warning server --port 80`
   *
   * Will result in:
   *     - options: `{ debugLevel: 'warning' }`
   *     - args: `['server', '--port', '80']`
   *
   * @param stopEarly Enable/disable stop early.
   */
  stopEarly(stopEarly = true) {
    this.cmd._stopEarly = stopEarly;
    return this;
  }
  /**
   * Disable parsing arguments. If enabled the raw arguments will be passed to
   * the action handler. This has no effect for parent or child commands. Only
   * for the command on which this method was called.
   *
   * @param useRawArgs Enable/disable raw arguments.
   */
  useRawArgs(useRawArgs = true) {
    this.cmd._useRawArgs = useRawArgs;
    return this;
  }
  /**
   * Set default command. The default command is executed when the program
   * was called without any argument and if no action handler is registered.
   *
   * @param name Name of the default command.
   */
  default(name) {
    this.cmd.defaultCommand = name;
    return this;
  }
  globalType(name, handler, options) {
    return this.type(name, handler, { ...options, global: true });
  }
  /**
   * Register custom type.
   *
   * @param name    The name of the type.
   * @param handler The callback method to parse the type.
   * @param options Type options.
   */
  type(name, handler, options) {
    if (this.cmd.types.get(name) && !options?.override) {
      throw new DuplicateTypeError(name);
    }
    this.cmd.types.set(name, {
      ...options,
      name,
      handler
    });
    if (handler instanceof Type && (typeof handler.complete !== "undefined" || typeof handler.values !== "undefined")) {
      const completeHandler = (cmd, parent) => handler.complete?.(cmd, parent) || [];
      this.complete(name, completeHandler, options);
    }
    return this;
  }
  /**
   * Register global complete handler.
   *
   * @param name      The name of the completion.
   * @param complete  The callback method to complete the type.
   * @param options   Complete options.
   */
  globalComplete(name, complete, options) {
    return this.complete(name, complete, { ...options, global: true });
  }
  complete(name, complete, options) {
    if (this.cmd.completions.has(name) && !options?.override) {
      throw new DuplicateCompletionError(name);
    }
    this.cmd.completions.set(name, {
      name,
      complete,
      ...options
    });
    return this;
  }
  /**
   * Throw validation errors instead of calling `exit()` to handle
   * validation errors manually.
   *
   * A validation error is thrown when the command is wrongly used by the user.
   * For example: If the user passes some invalid options or arguments to the
   * command.
   *
   * This has no effect for parent commands. Only for the command on which this
   * method was called and all child commands.
   *
   * **Example:**
   *
   * ```ts
   * import { Command, ValidationError } from "./mod.ts";
   *
   * const cmd = new Command();
   * // ...
   *
   * try {
   *   cmd.parse();
   * } catch(error) {
   *   if (error instanceof ValidationError) {
   *     cmd.showHelp();
   *     Deno.exit(1);
   *   }
   *   throw error;
   * }
   * ```
   *
   * @see ValidationError
   */
  throwErrors() {
    this.cmd.throwOnError = true;
    return this;
  }
  /**
   * Set custom error handler.
   *
   * @param handler Error handler callback function.
   */
  error(handler) {
    this.cmd.errorHandler = handler;
    return this;
  }
  /** Get error handler callback function. */
  getErrorHandler() {
    return this.errorHandler ?? this._parent?.errorHandler;
  }
  /**
   * Same as `.throwErrors()` but also prevents calling `exit()` after
   * printing help or version with the --help and --version option.
   */
  noExit() {
    this.cmd._shouldExit = false;
    this.throwErrors();
    return this;
  }
  /**
   * Disable inheriting global commands, options and environment variables from
   * parent commands.
   */
  noGlobals() {
    this.cmd._noGlobals = true;
    return this;
  }
  /** Check whether the command should throw errors or exit. */
  shouldThrowErrors() {
    return this.throwOnError || !!this._parent?.shouldThrowErrors();
  }
  /** Check whether the command should exit after printing help or version. */
  shouldExit() {
    return this._shouldExit ?? this._parent?.shouldExit() ?? true;
  }
  /**
   * Enable grouping of options and set the name of the group.
   * All option which are added after calling the `.group()` method will be
   * grouped in the help output. If the `.group()` method can be use multiple
   * times to create more groups.
   *
   * @param name The name of the option group.
   */
  group(name) {
    this.cmd._groupName = name;
    return this;
  }
  /**
   * Register a global option.
   *
   * @param flags Flags string e.g: -h, --help, --manual <requiredArg:string> [optionalArg:number] [...restArgs:string]
   * @param desc Flag description.
   * @param opts Flag options or custom handler for processing flag value.
   */
  globalOption(flags, desc, opts) {
    if (typeof opts === "function") {
      return this.option(
        flags,
        desc,
        { value: opts, global: true }
      );
    }
    return this.option(
      flags,
      desc,
      { ...opts, global: true }
    );
  }
  option(flags, desc, opts) {
    if (typeof opts === "function") {
      opts = { value: opts };
    }
    const result = splitArguments(flags);
    const args = result.typeDefinition ? parseArgumentsDefinition(result.typeDefinition) : [];
    const option = {
      ...opts,
      name: "",
      description: desc,
      args,
      flags: result.flags,
      equalsSign: result.equalsSign,
      typeDefinition: result.typeDefinition,
      groupName: this._groupName ?? void 0
    };
    if (option.separator) {
      for (const arg of args) {
        if (arg.list) {
          arg.separator = option.separator;
        }
      }
    }
    for (const part of option.flags) {
      const arg = part.trim();
      const isLong = /^--/.test(arg);
      const name = isLong ? arg.slice(2) : arg.slice(1);
      if (this.cmd.getBaseOption(name, true)) {
        if (opts?.override) {
          this.removeOption(name);
        } else {
          throw new DuplicateOptionNameError(name, this.getPath());
        }
      }
      if (!option.name && isLong) {
        option.name = name;
      } else if (!option.aliases) {
        option.aliases = [name];
      } else {
        option.aliases.push(name);
      }
    }
    if (option.prepend) {
      this.cmd.options.unshift(option);
    } else {
      this.cmd.options.push(option);
    }
    return this;
  }
  /**
   * Register command example.
   *
   * @param name          Name of the example.
   * @param description   The content of the example.
   */
  example(name, description) {
    if (this.cmd.hasExample(name)) {
      throw new DuplicateExampleError(name);
    }
    this.cmd.examples.push({ name, description });
    return this;
  }
  /**
   * @param flags Flags string e.g: -h, --help, --manual <requiredArg:string> [optionalArg:number] [...restArgs:string]
   * @param desc Flag description.
   * @param opts Flag options or custom handler for processing flag value.
   */
  /**
   * Register a global environment variable.
   *
   * @param name        Name of the environment variable.
   * @param description The description of the environment variable.
   * @param options     Environment variable options.
   */
  globalEnv(name, description, options) {
    return this.env(
      name,
      description,
      { ...options, global: true }
    );
  }
  env(name, description, options) {
    const result = splitArguments(name);
    if (!result.typeDefinition) {
      result.typeDefinition = "<value:boolean>";
    }
    if (result.flags.some((envName) => this.cmd.getBaseEnvVar(envName, true))) {
      throw new DuplicateEnvVarError(name);
    }
    const details = parseArgumentsDefinition(
      result.typeDefinition
    );
    if (details.length > 1) {
      throw new TooManyEnvVarValuesError(name);
    } else if (details.length && details[0].optional) {
      throw new UnexpectedOptionalEnvVarValueError(name);
    } else if (details.length && details[0].variadic) {
      throw new UnexpectedVariadicEnvVarValueError(name);
    }
    this.cmd.envVars.push({
      name: result.flags[0],
      names: result.flags,
      description,
      type: details[0].type,
      details: details.shift(),
      ...options
    });
    return this;
  }
  /*****************************************************************************
   **** MAIN HANDLER ***********************************************************
   *****************************************************************************/
  /**
   * Parse command line arguments and execute matched command.
   *
   * @param args Command line args to parse. Ex: `cmd.parse( Deno.args )`
   */
  parse(args = getArgs()) {
    const ctx = {
      unknown: args.slice(),
      flags: {},
      env: {},
      literal: [],
      stopEarly: false,
      stopOnUnknown: false,
      defaults: {},
      actions: []
    };
    return this.parseCommand(ctx);
  }
  async parseCommand(ctx) {
    try {
      this.reset();
      this.registerDefaults();
      this.rawArgs = ctx.unknown.slice();
      if (this._useRawArgs) {
        await this.parseEnvVars(ctx, this.envVars);
        return await this.execute(ctx.env, ctx.unknown);
      }
      let preParseGlobals = false;
      let subCommand;
      if (ctx.unknown.length > 0) {
        subCommand = this.getSubCommand(ctx);
        if (!subCommand) {
          const optionName = ctx.unknown[0].replace(/^-+/, "");
          const option = this.getOption(optionName, true);
          if (option?.global) {
            preParseGlobals = true;
            await this.parseGlobalOptionsAndEnvVars(ctx);
          }
        }
      }
      if (subCommand || ctx.unknown.length > 0) {
        subCommand ??= this.getSubCommand(ctx);
        if (subCommand) {
          subCommand._globalParent = this;
          return subCommand.parseCommand(ctx);
        }
      }
      await this.parseOptionsAndEnvVars(ctx, preParseGlobals);
      const options = { ...ctx.env, ...ctx.flags };
      const args = this.parseArguments(ctx, options);
      this.literalArgs = ctx.literal;
      if (ctx.actions.length) {
        await Promise.all(
          ctx.actions.map((action) => action.call(this, options, ...args))
        );
        if (ctx.standalone) {
          return {
            options,
            args,
            cmd: this,
            literal: this.literalArgs
          };
        }
      }
      return await this.execute(options, args);
    } catch (error6) {
      this.handleError(error6);
    }
  }
  getSubCommand(ctx) {
    const subCommand = this.getCommand(ctx.unknown[0], true);
    if (subCommand) {
      ctx.unknown.shift();
    }
    return subCommand;
  }
  async parseGlobalOptionsAndEnvVars(ctx) {
    const isHelpOption = this.getHelpOption()?.flags.includes(ctx.unknown[0]);
    const envVars = [
      ...this.envVars.filter((envVar) => envVar.global),
      ...this.getGlobalEnvVars(true)
    ];
    await this.parseEnvVars(ctx, envVars, !isHelpOption);
    const options = [
      ...this.options.filter((option) => option.global),
      ...this.getGlobalOptions(true)
    ];
    this.parseOptions(ctx, options, {
      stopEarly: true,
      stopOnUnknown: true,
      dotted: false
    });
  }
  async parseOptionsAndEnvVars(ctx, preParseGlobals) {
    const helpOption = this.getHelpOption();
    const isVersionOption = this._versionOption?.flags.includes(ctx.unknown[0]);
    const isHelpOption = helpOption && ctx.flags?.[helpOption.name] === true;
    const envVars = preParseGlobals ? this.envVars.filter((envVar) => !envVar.global) : this.getEnvVars(true);
    await this.parseEnvVars(
      ctx,
      envVars,
      !isHelpOption && !isVersionOption
    );
    const options = this.getOptions(true);
    this.parseOptions(ctx, options);
  }
  /** Register default options like `--version` and `--help`. */
  registerDefaults() {
    if (this.hasDefaults || this.getParent()) {
      return this;
    }
    this.hasDefaults = true;
    this.reset();
    !this.types.has("string") && this.type("string", new StringType(), { global: true });
    !this.types.has("number") && this.type("number", new NumberType(), { global: true });
    !this.types.has("integer") && this.type("integer", new IntegerType(), { global: true });
    !this.types.has("boolean") && this.type("boolean", new BooleanType(), { global: true });
    !this.types.has("file") && this.type("file", new FileType(), { global: true });
    if (!this._help) {
      this.help({});
    }
    if (this._versionOptions !== false && (this._versionOptions || this.ver)) {
      this.option(
        this._versionOptions?.flags || "-V, --version",
        this._versionOptions?.desc || "Show the version number for this program.",
        {
          standalone: true,
          prepend: true,
          action: async function() {
            const long = this.getRawArgs().includes(
              `--${this._versionOption?.name}`
            );
            if (long) {
              await checkVersion(this);
              this.showLongVersion();
            } else {
              this.showVersion();
            }
            this.exit();
          },
          ...this._versionOptions?.opts ?? {}
        }
      );
      this._versionOption = this.options[0];
    }
    if (this._helpOptions !== false) {
      this.option(
        this._helpOptions?.flags || "-h, --help",
        this._helpOptions?.desc || "Show this help.",
        {
          standalone: true,
          global: true,
          prepend: true,
          action: async function() {
            const long = this.getRawArgs().includes(
              `--${this.getHelpOption()?.name}`
            );
            await checkVersion(this);
            this.showHelp({ long });
            this.exit();
          },
          ...this._helpOptions?.opts ?? {}
        }
      );
      this._helpOption = this.options[0];
    }
    return this;
  }
  /**
   * Execute command.
   * @param options A map of options.
   * @param args Command arguments.
   */
  async execute(options, args) {
    if (this.defaultCommand) {
      const cmd = this.getCommand(this.defaultCommand, true);
      if (!cmd) {
        throw new DefaultCommandNotFoundError(
          this.defaultCommand,
          this.getCommands()
        );
      }
      cmd._globalParent = this;
      return cmd.execute(options, args);
    }
    await this.executeGlobalAction(options, args);
    if (this.actionHandler) {
      await this.actionHandler(options, ...args);
    }
    return {
      options,
      args,
      cmd: this,
      literal: this.literalArgs
    };
  }
  async executeGlobalAction(options, args) {
    if (!this._noGlobals) {
      await this._parent?.executeGlobalAction(options, args);
    }
    await this.globalActionHandler?.(options, ...args);
  }
  /** Parse raw command line arguments. */
  parseOptions(ctx, options, {
    stopEarly = this._stopEarly,
    stopOnUnknown = false,
    dotted = true
  } = {}) {
    parseFlags(ctx, {
      stopEarly,
      stopOnUnknown,
      dotted,
      allowEmpty: this._allowEmpty,
      flags: options,
      ignoreDefaults: ctx.env,
      parse: (type) => this.parseType(type),
      option: (option) => {
        if (option.action) {
          ctx.actions.push(option.action);
        }
      }
    });
  }
  /** Parse argument type. */
  parseType(type) {
    const typeSettings = this.getType(type.type);
    if (!typeSettings) {
      throw new UnknownTypeError(
        type.type,
        this.getTypes().map((type2) => type2.name)
      );
    }
    return typeSettings.handler instanceof Type ? typeSettings.handler.parse(type) : typeSettings.handler(type);
  }
  /**
   * Read and validate environment variables.
   * @param ctx Parse context.
   * @param envVars env vars defined by the command.
   * @param validate when true, throws an error if a required env var is missing.
   */
  async parseEnvVars(ctx, envVars, validate = true) {
    for (const envVar of envVars) {
      const env = await this.findEnvVar(envVar.names);
      if (env) {
        const parseType = (value) => {
          return this.parseType({
            label: "Environment variable",
            type: envVar.type,
            name: env.name,
            value
          });
        };
        const propertyName = underscoreToCamelCase(
          envVar.prefix ? envVar.names[0].replace(new RegExp(`^${envVar.prefix}`), "") : envVar.names[0]
        );
        if (envVar.details.list) {
          ctx.env[propertyName] = env.value.split(envVar.details.separator ?? ",").map(parseType);
        } else {
          ctx.env[propertyName] = parseType(env.value);
        }
        if (envVar.value && typeof ctx.env[propertyName] !== "undefined") {
          ctx.env[propertyName] = envVar.value(ctx.env[propertyName]);
        }
      } else if (envVar.required && validate) {
        throw new MissingRequiredEnvVarError(envVar);
      }
    }
  }
  async findEnvVar(names) {
    for (const name of names) {
      const status = await globalThis.Deno?.permissions.query({
        name: "env",
        variable: name
      });
      if (!status || status.state === "granted") {
        const value = getEnv(name);
        if (value) {
          return { name, value };
        }
      }
    }
    return void 0;
  }
  /**
   * Parse command-line arguments.
   * @param ctx     Parse context.
   * @param options Parsed command line options.
   */
  parseArguments(ctx, options) {
    const params = [];
    const args = ctx.unknown.slice();
    if (!this.hasArguments()) {
      if (args.length) {
        if (this.hasCommands(true)) {
          if (this.hasCommand(args[0], true)) {
            throw new TooManyArgumentsError(args);
          } else {
            throw new UnknownCommandError(args[0], this.getCommands());
          }
        } else {
          throw new NoArgumentsAllowedError(this.getPath());
        }
      }
    } else {
      if (!args.length) {
        const required = this.getArguments().filter((expectedArg) => !expectedArg.optional).map((expectedArg) => expectedArg.name);
        if (required.length) {
          const optionNames = Object.keys(options);
          const hasStandaloneOption = !!optionNames.find(
            (name) => this.getOption(name, true)?.standalone
          );
          if (!hasStandaloneOption) {
            throw new MissingArgumentsError(required);
          }
        }
      } else {
        for (const expectedArg of this.getArguments()) {
          if (!args.length) {
            if (expectedArg.optional) {
              break;
            }
            throw new MissingArgumentError(expectedArg.name);
          }
          let arg;
          const parseArgValue = (value) => {
            return expectedArg.list ? value.split(",").map((value2) => parseArgType(value2)) : parseArgType(value);
          };
          const parseArgType = (value) => {
            return this.parseType({
              label: "Argument",
              type: expectedArg.type,
              name: expectedArg.name,
              value
            });
          };
          if (expectedArg.variadic) {
            arg = args.splice(0, args.length).map(
              (value) => parseArgValue(value)
            );
          } else {
            arg = parseArgValue(args.shift());
          }
          if (expectedArg.variadic && Array.isArray(arg)) {
            params.push(...arg);
          } else if (typeof arg !== "undefined") {
            params.push(arg);
          }
        }
        if (args.length) {
          throw new TooManyArgumentsError(args);
        }
      }
    }
    return params;
  }
  handleError(error6) {
    this.throw(
      error6 instanceof ValidationError ? new ValidationError2(error6.message) : error6 instanceof Error ? error6 : new Error(`[non-error-thrown] ${error6}`)
    );
  }
  /**
   * Handle error. If `throwErrors` is enabled the error will be thrown,
   * otherwise a formatted error message will be printed and `exit(1)`
   * will be called. This will also trigger registered error handlers.
   *
   * @param error The error to handle.
   */
  throw(error6) {
    if (error6 instanceof ValidationError2) {
      error6.cmd = this;
    }
    this.getErrorHandler()?.(error6, this);
    if (this.shouldThrowErrors() || !(error6 instanceof ValidationError2)) {
      throw error6;
    }
    this.showHelp();
    console.error(red(`  ${bold("error")}: ${error6.message}
`));
    exit(error6 instanceof ValidationError2 ? error6.exitCode : 1);
  }
  /*****************************************************************************
   **** GETTER *****************************************************************
   *****************************************************************************/
  /** Get command name. */
  getName() {
    return this._name;
  }
  /** Get parent command. */
  getParent() {
    return this._parent;
  }
  /**
   * Get parent command from global executed command.
   * Be sure, to call this method only inside an action handler. Unless this or any child command was executed,
   * this method returns always undefined.
   */
  getGlobalParent() {
    return this._globalParent;
  }
  /** Get main command. */
  getMainCommand() {
    return this._parent?.getMainCommand() ?? this;
  }
  /** Get command name aliases. */
  getAliases() {
    return this.aliases;
  }
  /**
   * Get full command path.
   *
   * @param name Override the main command name.
   */
  getPath(name) {
    return this._parent ? this._parent.getPath(name) + " " + this._name : name || this._name;
  }
  /** Get arguments definition. E.g: <input-file:string> <output-file:string> */
  getArgsDefinition() {
    return this.argsDefinition;
  }
  /**
   * Get argument by name.
   *
   * @param name Name of the argument.
   */
  getArgument(name) {
    return this.getArguments().find((arg) => arg.name === name);
  }
  /** Get arguments. */
  getArguments() {
    if (!this.args.length && this.argsDefinition) {
      this.args = parseArgumentsDefinition(this.argsDefinition);
    }
    return this.args;
  }
  /** Check if command has arguments. */
  hasArguments() {
    return !!this.argsDefinition;
  }
  /** Get command version. */
  getVersion() {
    return this.getVersionHandler()?.call(this, this);
  }
  /** Get help handler method. */
  getVersionHandler() {
    return this.ver ?? this._parent?.getVersionHandler();
  }
  /** Get command description. */
  getDescription() {
    return typeof this.desc === "function" ? this.desc = this.desc() : this.desc;
  }
  /** Get auto generated command usage. */
  getUsage() {
    return this._usage ?? [this.getArgsDefinition(), this.getRequiredOptionsDefinition()].join(" ").trim();
  }
  getRequiredOptionsDefinition() {
    return this.getOptions().filter((option) => option.required).map(
      (option) => [findFlag(option.flags), option.typeDefinition].filter((v) => v).join(" ").trim()
    ).join(" ");
  }
  /** Get short command description. This is the first line of the description. */
  getShortDescription() {
    return getDescription(this.getDescription(), true);
  }
  /** Get original command-line arguments. */
  getRawArgs() {
    return this.rawArgs;
  }
  /** Get all arguments defined after the double dash. */
  getLiteralArgs() {
    return this.literalArgs;
  }
  /** Output generated help without exiting. */
  showVersion() {
    console.log(this.getVersion());
  }
  /** Returns command name, version and meta data. */
  getLongVersion() {
    return `${bold(this.getMainCommand().getName())} ${brightBlue(this.getVersion() ?? "")}` + Object.entries(this.getMeta()).map(
      ([k, v]) => `
${bold(k)} ${brightBlue(v)}`
    ).join("");
  }
  /** Outputs command name, version and meta data. */
  showLongVersion() {
    console.log(this.getLongVersion());
  }
  /** Output generated help without exiting. */
  showHelp(options) {
    console.log(this.getHelp(options));
  }
  /** Get generated help. */
  getHelp(options) {
    this.registerDefaults();
    return this.getHelpHandler().call(this, this, options ?? {});
  }
  /** Get help handler method. */
  getHelpHandler() {
    return this._help ?? this._parent?.getHelpHandler();
  }
  exit(code3 = 0) {
    if (this.shouldExit()) {
      exit(code3);
    }
  }
  /*****************************************************************************
   **** Options GETTER *********************************************************
   *****************************************************************************/
  /**
   * Checks whether the command has options or not.
   *
   * @param hidden Include hidden options.
   */
  hasOptions(hidden2) {
    return this.getOptions(hidden2).length > 0;
  }
  /**
   * Get options.
   *
   * @param hidden Include hidden options.
   */
  getOptions(hidden2) {
    return this.getGlobalOptions(hidden2).concat(this.getBaseOptions(hidden2));
  }
  /**
   * Get base options.
   *
   * @param hidden Include hidden options.
   */
  getBaseOptions(hidden2) {
    if (!this.options.length) {
      return [];
    }
    return hidden2 ? this.options.slice(0) : this.options.filter((opt) => !opt.hidden);
  }
  /**
   * Get global options.
   *
   * @param hidden Include hidden options.
   */
  getGlobalOptions(hidden2) {
    const helpOption = this.getHelpOption();
    const getGlobals = (cmd, noGlobals, options = [], names = []) => {
      if (cmd.options.length) {
        for (const option of cmd.options) {
          if (option.global && !this.options.find((opt) => opt.name === option.name) && names.indexOf(option.name) === -1 && (hidden2 || !option.hidden)) {
            if (noGlobals && option !== helpOption) {
              continue;
            }
            names.push(option.name);
            options.push(option);
          }
        }
      }
      return cmd._parent ? getGlobals(
        cmd._parent,
        noGlobals || cmd._noGlobals,
        options,
        names
      ) : options;
    };
    return this._parent ? getGlobals(this._parent, this._noGlobals) : [];
  }
  /**
   * Checks whether the command has an option with given name or not.
   *
   * @param name Name of the option. Must be in param-case.
   * @param hidden Include hidden options.
   */
  hasOption(name, hidden2) {
    return !!this.getOption(name, hidden2);
  }
  /**
   * Get option by name.
   *
   * @param name Name of the option. Must be in param-case.
   * @param hidden Include hidden options.
   */
  getOption(name, hidden2) {
    return this.getBaseOption(name, hidden2) ?? this.getGlobalOption(name, hidden2);
  }
  /**
   * Get base option by name.
   *
   * @param name Name of the option. Must be in param-case.
   * @param hidden Include hidden options.
   */
  getBaseOption(name, hidden2) {
    const option = this.options.find(
      (option2) => option2.name === name || option2.aliases?.includes(name)
    );
    return option && (hidden2 || !option.hidden) ? option : void 0;
  }
  /**
   * Get global option from parent commands by name.
   *
   * @param name Name of the option. Must be in param-case.
   * @param hidden Include hidden options.
   */
  getGlobalOption(name, hidden2) {
    const helpOption = this.getHelpOption();
    const getGlobalOption = (parent, noGlobals) => {
      const option = parent.getBaseOption(
        name,
        hidden2
      );
      if (!option?.global) {
        return parent._parent && getGlobalOption(
          parent._parent,
          noGlobals || parent._noGlobals
        );
      }
      if (noGlobals && option !== helpOption) {
        return;
      }
      return option;
    };
    return this._parent && getGlobalOption(
      this._parent,
      this._noGlobals
    );
  }
  /**
   * Remove option by name.
   *
   * @param name Name of the option. Must be in param-case.
   */
  removeOption(name) {
    const index = this.options.findIndex((option) => option.name === name);
    if (index === -1) {
      return;
    }
    return this.options.splice(index, 1)[0];
  }
  /**
   * Checks whether the command has sub-commands or not.
   *
   * @param hidden Include hidden commands.
   */
  hasCommands(hidden2) {
    return this.getCommands(hidden2).length > 0;
  }
  /**
   * Get commands.
   *
   * @param hidden Include hidden commands.
   */
  getCommands(hidden2) {
    return this.getGlobalCommands(hidden2).concat(this.getBaseCommands(hidden2));
  }
  /**
   * Get base commands.
   *
   * @param hidden Include hidden commands.
   */
  getBaseCommands(hidden2) {
    const commands = Array.from(this.commands.values());
    return hidden2 ? commands : commands.filter((cmd) => !cmd.isHidden);
  }
  /**
   * Get global commands.
   *
   * @param hidden Include hidden commands.
   */
  getGlobalCommands(hidden2) {
    const getCommands = (command, noGlobals, commands = [], names = []) => {
      if (command.commands.size) {
        for (const [_, cmd] of command.commands) {
          if (cmd.isGlobal && this !== cmd && !this.commands.has(cmd._name) && names.indexOf(cmd._name) === -1 && (hidden2 || !cmd.isHidden)) {
            if (noGlobals && cmd?.getName() !== "help") {
              continue;
            }
            names.push(cmd._name);
            commands.push(cmd);
          }
        }
      }
      return command._parent ? getCommands(
        command._parent,
        noGlobals || command._noGlobals,
        commands,
        names
      ) : commands;
    };
    return this._parent ? getCommands(this._parent, this._noGlobals) : [];
  }
  /**
   * Checks whether a child command exists by given name or alias.
   *
   * @param name Name or alias of the command.
   * @param hidden Include hidden commands.
   */
  hasCommand(name, hidden2) {
    return !!this.getCommand(name, hidden2);
  }
  /**
   * Get command by name or alias.
   *
   * @param name Name or alias of the command.
   * @param hidden Include hidden commands.
   */
  getCommand(name, hidden2) {
    return this.getBaseCommand(name, hidden2) ?? this.getGlobalCommand(name, hidden2);
  }
  /**
   * Get base command by name or alias.
   *
   * @param name Name or alias of the command.
   * @param hidden Include hidden commands.
   */
  getBaseCommand(name, hidden2) {
    for (const cmd of this.commands.values()) {
      if (cmd._name === name || cmd.aliases.includes(name)) {
        return cmd && (hidden2 || !cmd.isHidden) ? cmd : void 0;
      }
    }
  }
  /**
   * Get global command by name or alias.
   *
   * @param name Name or alias of the command.
   * @param hidden Include hidden commands.
   */
  getGlobalCommand(name, hidden2) {
    const getGlobalCommand = (parent, noGlobals) => {
      const cmd = parent.getBaseCommand(name, hidden2);
      if (!cmd?.isGlobal) {
        return parent._parent && getGlobalCommand(parent._parent, noGlobals || parent._noGlobals);
      }
      if (noGlobals && cmd.getName() !== "help") {
        return;
      }
      return cmd;
    };
    return this._parent && getGlobalCommand(this._parent, this._noGlobals);
  }
  /**
   * Remove sub-command by name or alias.
   *
   * @param name Name or alias of the command.
   */
  removeCommand(name) {
    const command = this.getBaseCommand(name, true);
    if (command) {
      this.commands.delete(command._name);
    }
    return command;
  }
  /** Get types. */
  getTypes() {
    return this.getGlobalTypes().concat(this.getBaseTypes());
  }
  /** Get base types. */
  getBaseTypes() {
    return Array.from(this.types.values());
  }
  /** Get global types. */
  getGlobalTypes() {
    const getTypes = (cmd, types = [], names = []) => {
      if (cmd) {
        if (cmd.types.size) {
          cmd.types.forEach((type) => {
            if (type.global && !this.types.has(type.name) && names.indexOf(type.name) === -1) {
              names.push(type.name);
              types.push(type);
            }
          });
        }
        return getTypes(cmd._parent, types, names);
      }
      return types;
    };
    return getTypes(this._parent);
  }
  /**
   * Get type by name.
   *
   * @param name Name of the type.
   */
  getType(name) {
    return this.getBaseType(name) ?? this.getGlobalType(name);
  }
  /**
   * Get base type by name.
   *
   * @param name Name of the type.
   */
  getBaseType(name) {
    return this.types.get(name);
  }
  /**
   * Get global type by name.
   *
   * @param name Name of the type.
   */
  getGlobalType(name) {
    if (!this._parent) {
      return;
    }
    const cmd = this._parent.getBaseType(name);
    if (!cmd?.global) {
      return this._parent.getGlobalType(name);
    }
    return cmd;
  }
  /** Get completions. */
  getCompletions() {
    return this.getGlobalCompletions().concat(this.getBaseCompletions());
  }
  /** Get base completions. */
  getBaseCompletions() {
    return Array.from(this.completions.values());
  }
  /** Get global completions. */
  getGlobalCompletions() {
    const getCompletions = (cmd, completions = [], names = []) => {
      if (cmd) {
        if (cmd.completions.size) {
          cmd.completions.forEach((completion) => {
            if (completion.global && !this.completions.has(completion.name) && names.indexOf(completion.name) === -1) {
              names.push(completion.name);
              completions.push(completion);
            }
          });
        }
        return getCompletions(cmd._parent, completions, names);
      }
      return completions;
    };
    return getCompletions(this._parent);
  }
  /**
   * Get completion by name.
   *
   * @param name Name of the completion.
   */
  getCompletion(name) {
    return this.getBaseCompletion(name) ?? this.getGlobalCompletion(name);
  }
  /**
   * Get base completion by name.
   *
   * @param name Name of the completion.
   */
  getBaseCompletion(name) {
    return this.completions.get(name);
  }
  /**
   * Get global completions by name.
   *
   * @param name Name of the completion.
   */
  getGlobalCompletion(name) {
    if (!this._parent) {
      return;
    }
    const completion = this._parent.getBaseCompletion(
      name
    );
    if (!completion?.global) {
      return this._parent.getGlobalCompletion(name);
    }
    return completion;
  }
  /**
   * Checks whether the command has environment variables or not.
   *
   * @param hidden Include hidden environment variable.
   */
  hasEnvVars(hidden2) {
    return this.getEnvVars(hidden2).length > 0;
  }
  /**
   * Get environment variables.
   *
   * @param hidden Include hidden environment variable.
   */
  getEnvVars(hidden2) {
    return this.getGlobalEnvVars(hidden2).concat(this.getBaseEnvVars(hidden2));
  }
  /**
   * Get base environment variables.
   *
   * @param hidden Include hidden environment variable.
   */
  getBaseEnvVars(hidden2) {
    if (!this.envVars.length) {
      return [];
    }
    return hidden2 ? this.envVars.slice(0) : this.envVars.filter((env) => !env.hidden);
  }
  /**
   * Get global environment variables.
   *
   * @param hidden Include hidden environment variable.
   */
  getGlobalEnvVars(hidden2) {
    if (this._noGlobals) {
      return [];
    }
    const getEnvVars = (cmd, envVars = [], names = []) => {
      if (cmd) {
        if (cmd.envVars.length) {
          cmd.envVars.forEach((envVar) => {
            if (envVar.global && !this.envVars.find((env) => env.names[0] === envVar.names[0]) && names.indexOf(envVar.names[0]) === -1 && (hidden2 || !envVar.hidden)) {
              names.push(envVar.names[0]);
              envVars.push(envVar);
            }
          });
        }
        return getEnvVars(cmd._parent, envVars, names);
      }
      return envVars;
    };
    return getEnvVars(this._parent);
  }
  /**
   * Checks whether the command has an environment variable with given name or not.
   *
   * @param name Name of the environment variable.
   * @param hidden Include hidden environment variable.
   */
  hasEnvVar(name, hidden2) {
    return !!this.getEnvVar(name, hidden2);
  }
  /**
   * Get environment variable by name.
   *
   * @param name Name of the environment variable.
   * @param hidden Include hidden environment variable.
   */
  getEnvVar(name, hidden2) {
    return this.getBaseEnvVar(name, hidden2) ?? this.getGlobalEnvVar(name, hidden2);
  }
  /**
   * Get base environment variable by name.
   *
   * @param name Name of the environment variable.
   * @param hidden Include hidden environment variable.
   */
  getBaseEnvVar(name, hidden2) {
    const envVar = this.envVars.find(
      (env) => env.names.indexOf(name) !== -1
    );
    return envVar && (hidden2 || !envVar.hidden) ? envVar : void 0;
  }
  /**
   * Get global environment variable by name.
   *
   * @param name Name of the environment variable.
   * @param hidden Include hidden environment variable.
   */
  getGlobalEnvVar(name, hidden2) {
    if (!this._parent || this._noGlobals) {
      return;
    }
    const envVar = this._parent.getBaseEnvVar(
      name,
      hidden2
    );
    if (!envVar?.global) {
      return this._parent.getGlobalEnvVar(name, hidden2);
    }
    return envVar;
  }
  /** Checks whether the command has examples or not. */
  hasExamples() {
    return this.examples.length > 0;
  }
  /** Get all examples. */
  getExamples() {
    return this.examples;
  }
  /** Checks whether the command has an example with given name or not. */
  hasExample(name) {
    return !!this.getExample(name);
  }
  /** Get example with given name. */
  getExample(name) {
    return this.examples.find((example) => example.name === name);
  }
  getHelpOption() {
    return this._helpOption ?? this._parent?.getHelpOption();
  }
};
function findFlag(flags) {
  for (const flag of flags) {
    if (flag.startsWith("--")) {
      return flag;
    }
  }
  return flags[0];
}

// https://jsr.io/@cliffy/command/1.0.0-rc.5/types/enum.ts
var EnumType = class extends Type {
  allowedValues;
  constructor(values) {
    super();
    this.allowedValues = Array.isArray(values) ? values : Object.values(values);
  }
  parse(type) {
    for (const value of this.allowedValues) {
      if (value.toString() === type.value) {
        return value;
      }
    }
    throw new InvalidTypeError(type, this.allowedValues.slice());
  }
  values() {
    return this.allowedValues.slice();
  }
  complete() {
    return this.values();
  }
};

// https://jsr.io/@cliffy/command/1.0.0-rc.5/completions/bash.ts
init_colors();

// https://jsr.io/@cliffy/command/1.0.0-rc.5/completions/_bash_completions_generator.ts
var BashCompletionsGenerator = class _BashCompletionsGenerator {
  constructor(name, cmd) {
    this.name = name;
    this.cmd = cmd;
  }
  /** Generates bash completions script for given command. */
  static generate(name, cmd) {
    if (!name || name === "COMMAND") {
      throw new MissingCommandNameCompletionsError("bash");
    }
    return new _BashCompletionsGenerator(name, cmd).generate();
  }
  /** Generates bash completions code. */
  generate() {
    const path3 = this.cmd.getPath(this.name);
    const version = this.cmd.getVersion() ? ` v${this.cmd.getVersion()}` : "";
    return `#!/usr/bin/env bash
# bash completion support for ${path3}${version}

_${replaceSpecialChars(path3)}() {
  local word cur prev listFiles
  local -a opts
  COMPREPLY=()
  cur="\${COMP_WORDS[COMP_CWORD]}"
  prev="\${COMP_WORDS[COMP_CWORD-1]}"
  cmd="_"
  opts=()
  listFiles=0

  _${replaceSpecialChars(this.name)}_complete() {
    local action="$1"; shift
    mapfile -t values < <( ${this.name} completions complete "\${action}" "\${@}" )
    for i in "\${values[@]}"; do
      opts+=("$i")
    done
  }

  _${replaceSpecialChars(this.name)}_expand() {
    [ "$cur" != "\${cur%\\\\}" ] && cur="$cur\\\\"
  
    # expand ~username type directory specifications
    if [[ "$cur" == \\~*/* ]]; then
      # shellcheck disable=SC2086
      eval cur=$cur
      
    elif [[ "$cur" == \\~* ]]; then
      cur=\${cur#\\~}
      # shellcheck disable=SC2086,SC2207
      COMPREPLY=( $( compgen -P '~' -u $cur ) )
      return \${#COMPREPLY[@]}
    fi
  }

  # shellcheck disable=SC2120
  _${replaceSpecialChars(this.name)}_file_dir() {
    listFiles=1
    local IFS=$'\\t\\n' xspec #glob
    _${replaceSpecialChars(this.name)}_expand || return 0
  
    if [ "\${1:-}" = -d ]; then
      # shellcheck disable=SC2206,SC2207,SC2086
      COMPREPLY=( \${COMPREPLY[@]:-} $( compgen -d -- $cur ) )
      #eval "$glob"    # restore glob setting.
      return 0
    fi
  
    xspec=\${1:+"!*.$1"}	# set only if glob passed in as $1
    # shellcheck disable=SC2206,SC2207
    COMPREPLY=( \${COMPREPLY[@]:-} $( compgen -f -X "$xspec" -- "$cur" )           $( compgen -d -- "$cur" ) )
  }

  ${this.generateCompletions(this.name, this.cmd).trim()}

  for word in "\${COMP_WORDS[@]}"; do
    case "\${word}" in
      -*) ;;
      *)
        cmd_tmp="\${cmd}_\${word//[^[:alnum:]]/_}"
        if type "\${cmd_tmp}" &>/dev/null; then
          cmd="\${cmd_tmp}"
        fi
    esac
  done

  \${cmd}

  if [[ listFiles -eq 1 ]]; then
    return 0
  fi

  if [[ \${#opts[@]} -eq 0 ]]; then
    # shellcheck disable=SC2207
    COMPREPLY=($(compgen -f "\${cur}"))
    return 0
  fi

  local values
  values="$( printf "\\n%s" "\${opts[@]}" )"
  local IFS=$'\\n'
  # shellcheck disable=SC2207
  local result=($(compgen -W "\${values[@]}" -- "\${cur}"))
  if [[ \${#result[@]} -eq 0 ]]; then
    # shellcheck disable=SC2207
    COMPREPLY=($(compgen -f "\${cur}"))
  else
    # shellcheck disable=SC2207
    COMPREPLY=($(printf '%q\\n' "\${result[@]}"))
  fi

  return 0
}

complete -F _${replaceSpecialChars(path3)} -o bashdefault -o default ${path3}`;
  }
  /** Generates bash completions method for given command and child commands. */
  generateCompletions(name, command, path3 = "", index = 1) {
    path3 = (path3 ? path3 + " " : "") + name;
    const commandCompletions = this.generateCommandCompletions(
      command,
      path3,
      index
    );
    const childCommandCompletions = command.getCommands(false).filter((subCommand) => subCommand !== command).map(
      (subCommand) => this.generateCompletions(
        subCommand.getName(),
        subCommand,
        path3,
        index + 1
      )
    ).join("");
    return `${commandCompletions}

${childCommandCompletions}`;
  }
  generateCommandCompletions(command, path3, index) {
    const flags = this.getFlags(command);
    const childCommandNames = command.getCommands(false).map((childCommand) => childCommand.getName());
    const completionsPath = ~path3.indexOf(" ") ? " " + path3.split(" ").slice(1).join(" ") : "";
    const optionArguments = this.generateOptionArguments(
      command,
      completionsPath
    );
    const completionsCmd = this.generateCommandCompletionsCommand(
      command,
      completionsPath
    );
    return `  __${replaceSpecialChars(path3)}() {
    opts=(${[...flags, ...childCommandNames].join(" ")})
    ${completionsCmd}
    if [[ \${cur} == -* || \${COMP_CWORD} -eq ${index} ]] ; then
      return 0
    fi
    ${optionArguments}
  }`;
  }
  getFlags(command) {
    return command.getOptions(false).map((option) => option.flags).flat();
  }
  generateOptionArguments(command, completionsPath) {
    let opts = "";
    const options = command.getOptions(false);
    if (options.length) {
      opts += 'case "${prev}" in';
      for (const option of options) {
        const flags = option.flags.map((flag) => flag.trim()).join("|");
        const completionsCmd = this.generateOptionCompletionsCommand(
          command,
          option.args,
          completionsPath,
          { standalone: option.standalone }
        );
        opts += `
      ${flags}) ${completionsCmd} ;;`;
      }
      opts += "\n    esac";
    }
    return opts;
  }
  generateCommandCompletionsCommand(command, path3) {
    const args = command.getArguments();
    if (args.length) {
      const type = command.getType(args[0].type);
      if (type && type.handler instanceof FileType) {
        return `_${replaceSpecialChars(this.name)}_file_dir`;
      }
      return `_${replaceSpecialChars(this.name)}_complete ${args[0].action}${path3}`;
    }
    return "";
  }
  generateOptionCompletionsCommand(command, args, path3, opts) {
    if (args.length) {
      const type = command.getType(args[0].type);
      if (type && type.handler instanceof FileType) {
        return `opts=(); _${replaceSpecialChars(this.name)}_file_dir`;
      }
      return `opts=(); _${replaceSpecialChars(this.name)}_complete ${args[0].action}${path3}`;
    }
    if (opts?.standalone) {
      return "opts=()";
    }
    return "";
  }
};
function replaceSpecialChars(str) {
  return str.replace(/[^a-zA-Z0-9]/g, "_");
}

// https://jsr.io/@cliffy/command/1.0.0-rc.5/completions/bash.ts
var BashCompletionsCommand = class extends Command {
  #cmd;
  constructor(cmd) {
    super();
    this.#cmd = cmd;
    return this.description(() => {
      const baseCmd = this.#cmd || this.getMainCommand();
      return `Generate shell completions for bash.

To enable bash completions for this program add following line to your ${dim(italic("~/.bashrc"))}:

    ${dim(italic(`source <(${baseCmd.getPath()} completions bash)`))}`;
    }).noGlobals().option("-n, --name <command-name>", "The name of the main command.").action(({ name = this.getMainCommand().getName() }) => {
      const baseCmd = this.#cmd || this.getMainCommand();
      console.log(BashCompletionsGenerator.generate(name, baseCmd));
    });
  }
};

// https://jsr.io/@cliffy/command/1.0.0-rc.5/completions/fish.ts
init_colors();

// https://jsr.io/@cliffy/command/1.0.0-rc.5/completions/_fish_completions_generator.ts
var FishCompletionsGenerator = class _FishCompletionsGenerator {
  constructor(name, cmd) {
    this.name = name;
    this.cmd = cmd;
  }
  /** Generates fish completions script for given command. */
  static generate(name, cmd) {
    if (!name || name === "COMMAND") {
      throw new MissingCommandNameCompletionsError("fish");
    }
    return new _FishCompletionsGenerator(name, cmd).generate();
  }
  /** Generates fish completions script. */
  generate() {
    const path3 = this.cmd.getPath(this.name);
    const version = this.cmd.getVersion() ? ` v${this.cmd.getVersion()}` : "";
    return `#!/usr/bin/env fish
# fish completion support for ${path3}${version}

function __fish_${replaceSpecialChars2(this.name)}_using_command
  set -l cmds ${getCommandFnNames(this.name, this.cmd).join(" ")}
  set -l words (commandline -opc)
  set -l cmd "_"
  for word in $words
    switch $word
      case '-*'
        continue
      case '*'
        set word (string replace -r -a '\\W' '_' $word)
        set -l cmd_tmp $cmd"_$word"
        if contains $cmd_tmp $cmds
          set cmd $cmd_tmp
        end
    end
  end
  if test "$cmd" = "$argv[1]"
    return 0
  end
  return 1
end

${this.generateCompletions(this.name, this.cmd).trim()}`;
  }
  generateCompletions(name, command) {
    const parent = command.getParent();
    let result = ``;
    if (parent) {
      result += "\n" + this.complete(parent, {
        description: command.getShortDescription(),
        arguments: name
      });
    }
    const commandArgs = command.getArguments();
    if (commandArgs.length) {
      result += "\n" + this.complete(command, {
        arguments: commandArgs.length ? this.getCompletionCommand(command, commandArgs[0]) : void 0
      });
    }
    for (const option of command.getOptions(false)) {
      result += "\n" + this.completeOption(command, option);
    }
    for (const subCommand of command.getCommands(false)) {
      result += this.generateCompletions(subCommand.getName(), subCommand);
    }
    return result;
  }
  completeOption(command, option) {
    const shortOption = option.flags.find((flag) => flag.length === 2)?.replace(/^(-)+/, "");
    const longOption = option.flags.find((flag) => flag.length > 2)?.replace(/^(-)+/, "");
    return this.complete(command, {
      description: getDescription(option.description),
      shortOption,
      longOption,
      // required: option.requiredValue,
      required: true,
      standalone: option.standalone,
      arguments: option.args.length ? this.getCompletionCommand(command, option.args[0]) : void 0
    });
  }
  complete(command, options) {
    const cmd = ["complete"];
    cmd.push("-c", this.name);
    cmd.push(
      "-n",
      `'__fish_${replaceSpecialChars2(this.name)}_using_command __${replaceSpecialChars2(command.getPath(this.name))}'`
    );
    options.shortOption && cmd.push("-s", options.shortOption);
    options.longOption && cmd.push("-l", options.longOption);
    options.standalone && cmd.push("-x");
    cmd.push("-k");
    cmd.push("-f");
    if (options.arguments) {
      options.required && cmd.push("-r");
      cmd.push("-a", options.arguments);
    }
    if (options.description) {
      const description = getDescription(options.description, true).replace(/'/g, "\\'");
      cmd.push("-d", `'${description}'`);
    }
    return cmd.join(" ");
  }
  getCompletionCommand(cmd, arg) {
    const type = cmd.getType(arg.type);
    if (type && type.handler instanceof FileType) {
      return `'(__fish_complete_path)'`;
    }
    return `'(${this.name} completions complete ${arg.action + " " + getCompletionsPath(cmd)})'`;
  }
};
function getCommandFnNames(name, cmd, cmds = []) {
  cmds.push(`__${replaceSpecialChars2(cmd.getPath(name))}`);
  cmd.getCommands(false).forEach((command) => {
    getCommandFnNames(name, command, cmds);
  });
  return cmds;
}
function getCompletionsPath(command) {
  return command.getPath().split(" ").slice(1).join(" ");
}
function replaceSpecialChars2(str) {
  return str.replace(/[^a-zA-Z0-9]/g, "_");
}

// https://jsr.io/@cliffy/command/1.0.0-rc.5/completions/fish.ts
var FishCompletionsCommand = class extends Command {
  #cmd;
  constructor(cmd) {
    super();
    this.#cmd = cmd;
    return this.description(() => {
      const baseCmd = this.#cmd || this.getMainCommand();
      return `Generate shell completions for fish.

To enable fish completions for this program add following line to your ${dim(italic("~/.config/fish/config.fish"))}:

    ${dim(italic(`source (${baseCmd.getPath()} completions fish | psub)`))}`;
    }).noGlobals().option("-n, --name <command-name>", "The name of the main command.").action(({ name = this.getMainCommand().getName() }) => {
      const baseCmd = this.#cmd || this.getMainCommand();
      console.log(FishCompletionsGenerator.generate(name, baseCmd));
    });
  }
};

// https://jsr.io/@cliffy/command/1.0.0-rc.5/completions/zsh.ts
init_colors();

// https://jsr.io/@cliffy/command/1.0.0-rc.5/completions/_zsh_completions_generator.ts
var ZshCompletionsGenerator = class _ZshCompletionsGenerator {
  constructor(name, cmd) {
    this.name = name;
    this.cmd = cmd;
  }
  actions = /* @__PURE__ */ new Map();
  /** Generates zsh completions script for given command. */
  static generate(name, cmd) {
    if (!name || name === "COMMAND") {
      throw new MissingCommandNameCompletionsError("zsh");
    }
    return new _ZshCompletionsGenerator(name, cmd).generate();
  }
  /** Generates zsh completions code. */
  generate() {
    const path3 = this.cmd.getPath(this.name);
    const version = this.cmd.getVersion() ? ` v${this.cmd.getVersion()}` : "";
    return `#compdef ${this.name}

# zsh completion support for ${path3}${version}

autoload -U is-at-least

# shellcheck disable=SC2154
(( $+functions[__${replaceSpecialChars3(this.name)}_complete] )) ||
function __${replaceSpecialChars3(this.name)}_complete {
  local name="$1"; shift
  local action="$1"; shift
  integer ret=1
  local -a values
  local expl lines
  _tags "$name"
  while _tags; do
    if _requested "$name"; then
      # shellcheck disable=SC2034
      lines="$(${this.name} completions complete "\${action}" "\${@}")"
      values=("\${(ps:\\n:)lines}")
      if (( \${#values[@]} )); then
        while _next_label "$name" expl "$action"; do
          compadd -S '' "\${expl[@]}" "\${values[@]}"
        done
      fi
    fi
  done
}

${this.generateCompletions(this.name, this.cmd).trim()}

# shellcheck disable=SC2154
if [ "\${funcstack[1]}" = "_${this.name}" ]; then
  _${replaceSpecialChars3(this.name)} "\${@}"
else
  compdef _${replaceSpecialChars3(path3)} ${path3};
fi`;
  }
  /** Generates zsh completions method for given command and child commands. */
  generateCompletions(name, command, path3 = "") {
    if (!command.hasCommands(false) && !command.hasOptions(false) && !command.hasArguments()) {
      return "";
    }
    path3 = (path3 ? path3 + " " : "") + name;
    return `# shellcheck disable=SC2154
` + (command.getParent() ? `(( $+functions[_${replaceSpecialChars3(path3)}] )) || ` : "") + `_${replaceSpecialChars3(path3)}() {` + (!command.getParent() ? `
  local state` : "") + this.generateCommandCompletions(command, path3) + this.generateSubCommandCompletions(command, path3) + this.generateArgumentCompletions(command, path3) + this.generateActions(command) + `
}

` + command.getCommands(false).filter((subCommand) => subCommand !== command).map(
      (subCommand) => this.generateCompletions(subCommand.getName(), subCommand, path3)
    ).join("");
  }
  generateCommandCompletions(command, path3) {
    const commands = command.getCommands(false);
    let completions = commands.map(
      (subCommand) => `'${subCommand.getName().replace(/:/g, "\\:")}:${subCommand.getShortDescription().replace(/'/g, `'"'"'`)}'`
    ).join("\n      ");
    if (completions) {
      completions = `
    local -a commands
    # shellcheck disable=SC2034
    commands=(
      ${completions}
    )
    _describe 'command' commands`;
    }
    if (command.hasArguments()) {
      const arg = command.getArguments()[0];
      const type = command.getType(arg.type);
      let action;
      if (type && type.handler instanceof FileType) {
        const fileCompletions = this.getFileCompletions(type);
        completions += `
    ${fileCompletions}`;
      } else {
        const completionsPath = path3.split(" ").slice(1).join(" ");
        action = this.addAction(arg, completionsPath);
        if (action && command.getCompletion(arg.action)) {
          completions += `
    __${replaceSpecialChars3(this.name)}_complete ${action.arg.name} ${action.arg.action} ${action.cmd}`;
        }
      }
    }
    if (command.hasArguments() || command.hasCommands(false)) {
      completions = `

  function _commands() {${completions}
  }`;
    }
    return completions;
  }
  generateSubCommandCompletions(command, path3) {
    if (command.hasCommands(false)) {
      const actions = command.getCommands(false).map((command2) => {
        const aliases = [command2.getName(), ...command2.getAliases()].join("|");
        const action = replaceSpecialChars3(path3 + " " + command2.getName());
        return `${aliases}) _${action} ;;`;
      }).join("\n      ");
      return `

  function _command_args() {
    case "\${words[1]}" in
      ${actions}
    esac
  }`;
    }
    return "";
  }
  generateArgumentCompletions(command, path3) {
    this.actions.clear();
    const options = this.generateOptions(command, path3);
    let argIndex = 0;
    let argsCommand = "\n\n  _arguments -w -s -S -C";
    if (command.hasOptions()) {
      argsCommand += ` \\
    ${options.join(" \\\n    ")}`;
    }
    if (command.hasArguments() || command.hasCommands(false)) {
      const commandArgs = command.getArguments();
      const isVariadic = commandArgs.at(argIndex)?.variadic;
      const selector = isVariadic ? "*" : ++argIndex;
      argsCommand += ` \\
    '${selector}:command:_commands'`;
      const args = [];
      for (const arg of commandArgs.slice(1)) {
        const type = command.getType(arg.type);
        if (type && type.handler instanceof FileType) {
          const fileCompletions = this.getFileCompletions(type);
          if (arg.variadic) {
            argIndex++;
            for (let i = 0; i < 5; i++) {
              args.push(
                `${argIndex + i}${arg.optional ? "::" : ":"}${arg.name}:${fileCompletions}`
              );
            }
          } else {
            args.push(
              `${++argIndex}${arg.optional ? "::" : ":"}${arg.name}:${fileCompletions}`
            );
          }
        } else {
          const completionsPath = path3.split(" ").slice(1).join(" ");
          const action = this.addAction(arg, completionsPath);
          args.push(
            `${++argIndex}${arg.optional ? "::" : ":"}${arg.name}:->${action.name}`
          );
        }
      }
      argsCommand += args.map((arg) => `\\
    '${arg}'`).join("");
      if (command.hasCommands(false)) {
        argsCommand += ` \\
    '*::sub command:->command_args'`;
      }
    }
    return argsCommand;
  }
  generateOptions(command, path3) {
    const options = [];
    const cmdArgs = path3.split(" ");
    const _baseName = cmdArgs.shift();
    const completionsPath = cmdArgs.join(" ");
    const excludedFlags = command.getOptions(false).map((option) => option.standalone ? option.flags : false).flat().filter((flag) => typeof flag === "string");
    for (const option of command.getOptions(false)) {
      options.push(
        this.generateOption(command, option, completionsPath, excludedFlags)
      );
    }
    return options;
  }
  generateOption(command, option, completionsPath, excludedOptions) {
    let args = "";
    for (const arg of option.args) {
      const type = command.getType(arg.type);
      const optionalValue = arg.optional ? "::" : ":";
      if (type && type.handler instanceof FileType) {
        const fileCompletions = this.getFileCompletions(type);
        args += `${optionalValue}${arg.name}:${fileCompletions}`;
      } else {
        const action = this.addAction(arg, completionsPath);
        args += `${optionalValue}${arg.name}:->${action.name}`;
      }
    }
    const description = getDescription(option.description, true).replace(/\[/g, "\\[").replace(/]/g, "\\]").replace(/"/g, '\\"').replace(/'/g, `'"'"'`);
    const collect = option.collect ? "*" : "";
    const equalsSign = option.equalsSign ? "=" : "";
    const flags = option.flags.map((flag) => `${flag}${equalsSign}`);
    let result = "";
    if (option.standalone) {
      result += "'(- *)'";
    } else {
      const excludedFlags = [...excludedOptions];
      if (option.conflicts?.length) {
        excludedFlags.push(
          ...option.conflicts.map((opt) => "--" + opt.replace(/^--/, ""))
        );
      }
      if (!option.collect) {
        excludedFlags.push(...option.flags);
      }
      if (excludedFlags.length) {
        result += `'(${excludedFlags.join(" ")})'`;
      }
    }
    if (collect || flags.length > 1) {
      result += `{${collect}${flags.join(",")}}`;
    } else {
      result += `${flags.join(",")}`;
    }
    return `${result}'[${description}]${args}'`;
  }
  getFileCompletions(type) {
    if (!(type.handler instanceof FileType)) {
      return "";
    }
    return "_files";
  }
  addAction(arg, cmd) {
    const action = `${arg.name}-${arg.action}`;
    if (!this.actions.has(action)) {
      this.actions.set(action, {
        arg,
        label: `${arg.name}: ${arg.action}`,
        name: action,
        cmd
      });
    }
    return this.actions.get(action);
  }
  generateActions(command) {
    let actions = [];
    if (this.actions.size) {
      actions = Array.from(this.actions).map(
        ([name, action]) => `${name}) __${replaceSpecialChars3(this.name)}_complete ${action.arg.name} ${action.arg.action} ${action.cmd} ;;`
      );
    }
    if (command.hasCommands(false)) {
      actions.unshift(`command_args) _command_args ;;`);
    }
    if (actions.length) {
      return `

  case "$state" in
    ${actions.join("\n    ")}
  esac`;
    }
    return "";
  }
};
function replaceSpecialChars3(str) {
  return str.replace(/[^a-zA-Z0-9]/g, "_");
}

// https://jsr.io/@cliffy/command/1.0.0-rc.5/completions/zsh.ts
var ZshCompletionsCommand = class extends Command {
  #cmd;
  constructor(cmd) {
    super();
    this.#cmd = cmd;
    return this.description(() => {
      const baseCmd = this.#cmd || this.getMainCommand();
      return `Generate shell completions for zsh.

To enable zsh completions for this program add following line to your ${dim(italic("~/.zshrc"))}:

    ${dim(italic(`source <(${baseCmd.getPath()} completions zsh)`))}`;
    }).noGlobals().option(
      "-n, --name <command-name>",
      "The name of the main command.",
      { default: () => this.getMainCommand().getName() }
    ).action(({ name }) => {
      const baseCmd = this.#cmd || this.getMainCommand();
      console.log(ZshCompletionsGenerator.generate(name, baseCmd));
    });
  }
};

// https://jsr.io/@cliffy/command/1.0.0-rc.5/completions/completions_command.ts
init_colors();

// https://jsr.io/@cliffy/internal/1.0.0-rc.5/runtime/write_sync.ts
function writeSync(data) {
  const { Deno: Deno4, process } = globalThis;
  if (Deno4) {
    return Deno4.stdout.writeSync(data);
  } else if (process) {
    process.stdout.write(data);
    return data.byteLength;
  } else {
    throw new Error("unsupported runtime");
  }
}

// https://jsr.io/@cliffy/command/1.0.0-rc.5/completions/complete.ts
var CompleteCommand = class extends Command {
  constructor(cmd) {
    super();
    return this.description(
      "Get completions for given action from given command."
    ).noGlobals().arguments("<action:string> [command...:string]").action(async (_, action, ...commandNames) => {
      let parent;
      const completeCommand = commandNames?.reduce((cmd2, name) => {
        parent = cmd2;
        const childCmd = cmd2.getCommand(name, false);
        if (!childCmd) {
          throw new UnknownCompletionCommandError(name, cmd2.getCommands());
        }
        return childCmd;
      }, cmd || this.getMainCommand()) ?? (cmd || this.getMainCommand());
      const completion = completeCommand.getCompletion(action);
      const result = await completion?.complete(completeCommand, parent) ?? [];
      if (result?.length) {
        writeSync(new TextEncoder().encode(result.join("\n")));
      }
    }).reset();
  }
};

// https://jsr.io/@cliffy/command/1.0.0-rc.5/completions/completions_command.ts
var CompletionsCommand = class extends Command {
  #cmd;
  constructor(cmd) {
    super();
    this.#cmd = cmd;
    return this.description(() => {
      const baseCmd = this.#cmd || this.getMainCommand();
      return `Generate shell completions.

To enable shell completions for this program add the following line to your ${dim(italic("~/.bashrc"))} or similar:

    ${dim(italic(`source <(${baseCmd.getPath()} completions [shell])`))}

    For more information run ${dim(italic(`${baseCmd.getPath()} completions [shell] --help`))}
`;
    }).noGlobals().action(() => this.showHelp()).command("bash", new BashCompletionsCommand(this.#cmd)).command("fish", new FishCompletionsCommand(this.#cmd)).command("zsh", new ZshCompletionsCommand(this.#cmd)).command("complete", new CompleteCommand(this.#cmd)).hidden().reset();
  }
};

// https://jsr.io/@cliffy/command/1.0.0-rc.5/upgrade/provider.ts
init_colors();
var Provider = class {
  main;
  maxListSize = 25;
  logger;
  maxCols = 8;
  constructor({ main: main2, logger = console } = {}) {
    this.main = main2;
    this.logger = logger;
  }
  getSpecifier(name, version, defaultMain) {
    return `${this.getRegistryUrl(name, version)}${this.getMain(defaultMain)}`;
  }
  async isOutdated(name, currentVersion, targetVersion) {
    const { latest, versions } = await this.getVersions(name);
    if (targetVersion === "latest") {
      targetVersion = latest;
    }
    if (targetVersion && !versions.includes(targetVersion)) {
      throw new ValidationError2(
        `The provided version ${bold(red(targetVersion))} is not found.

    ${cyan(
          `Visit ${brightBlue(this.getRepositoryUrl(name))} for available releases or run again with the ${yellow(
            "-l"
          )} or ${yellow("--list-versions")} command.`
        )}`
      );
    }
    if (latest && latest === currentVersion && latest === targetVersion) {
      this.logger.warn(
        yellow(
          `You're already using the latest available version ${currentVersion} of ${name}.`
        )
      );
      return false;
    }
    if (targetVersion && currentVersion === targetVersion) {
      this.logger.warn(
        yellow(`You're already using version ${currentVersion} of ${name}.`)
      );
      return false;
    }
    return true;
  }
  async listVersions(name, currentVersion) {
    const { versions } = await this.getVersions(name);
    this.printVersions(versions, currentVersion);
  }
  printVersions(versions, currentVersion, { maxCols = this.maxCols, indent = 0 } = {}) {
    versions = versions.slice();
    if (versions?.length) {
      versions = versions.map(
        (version) => currentVersion && currentVersion === version ? green(`* ${version}`) : `  ${version}`
      );
      if (versions.length > this.maxListSize) {
        const table = new Table().indent(indent);
        const rowSize = Math.ceil(versions.length / maxCols);
        const colSize = Math.min(versions.length, maxCols);
        let versionIndex = 0;
        for (let colIndex = 0; colIndex < colSize; colIndex++) {
          for (let rowIndex = 0; rowIndex < rowSize; rowIndex++) {
            if (!table[rowIndex]) {
              table[rowIndex] = [];
            }
            table[rowIndex][colIndex] = versions[versionIndex++];
          }
        }
        console.log(table.toString());
      } else {
        console.log(
          versions.map((version) => " ".repeat(indent) + version).join("\n")
        );
      }
    }
  }
  setLogger(logger) {
    this.logger = logger;
  }
  getMain(defaultMain) {
    const main2 = this.main ?? defaultMain;
    return main2 ? `/${main2}` : "";
  }
};

// https://jsr.io/@cliffy/command/1.0.0-rc.5/upgrade/upgrade_command.ts
init_colors();

// https://jsr.io/@cliffy/command/1.0.0-rc.5/upgrade/logger.ts
function createLogger({ spinner, verbose } = {}) {
  function write(type, ...args) {
    spinner?.stop();
    console[type](...args);
    spinner?.start();
  }
  return {
    log: (...args) => {
      verbose && write("log", ...args);
    },
    info: (...args) => write("info", ...args),
    warn: (...args) => write("warn", ...args),
    error: (...args) => write("error", ...args)
  };
}

// https://jsr.io/@cliffy/internal/1.0.0-rc.5/runtime/no_color.ts
function getNoColor() {
  const { Deno: Deno4, process } = globalThis;
  if (Deno4) {
    return Deno4.noColor;
  } else if (process) {
    return process?.env.NO_COLOR === "1" || process?.env.NODE_DISABLE_COLORS === "1";
  }
  throw new Error("unsupported runtime");
}

// https://jsr.io/@cliffy/command/1.0.0-rc.5/upgrade/spinner.ts
var encoder = new TextEncoder();
var LINE_CLEAR = encoder.encode("\r\x1B[K");
var COLOR_RESET = "\x1B[0m";
var DEFAULT_INTERVAL = 75;
var DEFAULT_SPINNER = ["\u280B", "\u2819", "\u2839", "\u2838", "\u283C", "\u2834", "\u2826", "\u2827", "\u2807", "\u280F"];
var COLORS = {
  black: "\x1B[30m",
  red: "\x1B[31m",
  green: "\x1B[32m",
  yellow: "\x1B[33m",
  blue: "\x1B[34m",
  magenta: "\x1B[35m",
  cyan: "\x1B[36m",
  white: "\x1B[37m",
  gray: "\x1B[90m"
};
var Spinner = class {
  #spinner;
  /**
   * The message to display next to the spinner.
   * This can be changed while the spinner is active.
   *
   * @example Usage
   * ```ts no-eval
   * import { Spinner } from "./spinner.ts";
   *
   * const spinner = new Spinner({ message: "Working..." });
   * spinner.start();
   *
   * for (let step = 0; step < 5; step++) {
   *   // do some work
   *   await new Promise((resolve) => setTimeout(resolve, 1000));
   *
   *   spinner.message = `Finished Step #${step}`;
   * }
   *
   * spinner.stop();
   * console.log("Done!");
   * ```
   */
  message;
  #interval;
  #color;
  #intervalId;
  #active = false;
  /**
   * Creates a new spinner.
   *
   * @example Usage
   * ```ts no-assert
   * import { Spinner } from "./spinner.ts";
   *
   * const spinner = new Spinner({ message: "Loading..." });
   * spinner.stop();
   * ```
   */
  constructor({
    spinner = DEFAULT_SPINNER,
    message: message2 = "",
    interval = DEFAULT_INTERVAL,
    color
  } = {}) {
    this.#spinner = spinner;
    this.message = message2;
    this.#interval = interval;
    this.color = color;
  }
  /**
   * Set the color of the spinner. This defaults to the default terminal color.
   * This can be changed while the spinner is active.
   *
   * Providing `undefined` will use the default terminal color.
   *
   * @param value Color to set.
   *
   * @example Usage
   * ```ts no-eval
   * import { Spinner } from "./spinner.ts";
   *
   * const spinner = new Spinner({ message: "Loading...", color: "yellow" });
   * spinner.start();
   *
   * // do some work
   * await new Promise((resolve) => setTimeout(resolve, 1000));
   *
   * spinner.color = "magenta";
   * ```
   */
  set color(value) {
    this.#color = value ? COLORS[value] : void 0;
  }
  /**
   * Get the current color of the spinner.
   *
   * @example Usage
   * ```ts no-assert
   * import { Spinner } from "./spinner.ts";
   *
   * const spinner = new Spinner({ message: "Loading", color: "blue" });
   *
   * spinner.color; // Blue ANSI escape sequence
   * ```
   * @returns The color of the spinner or `undefined` if it's using the terminal default.
   */
  get color() {
    return this.#color;
  }
  /**
   * Starts the spinner.
   *
   * @example Usage
   * ```ts no-eval
   * import { Spinner } from "./spinner.ts";
   *
   * const spinner = new Spinner({ message: "Loading..." });
   * spinner.start();
   * ```
   */
  start() {
    if (this.#active || globalThis.Deno?.stdout.writable.locked) {
      return;
    }
    this.#active = true;
    let i = 0;
    const noColor3 = getNoColor();
    const updateFrame = () => {
      const color = this.#color ?? "";
      const frame = encoder.encode(
        noColor3 ? this.#spinner[i] + " " + this.message : color + this.#spinner[i] + COLOR_RESET + " " + this.message
      );
      const writeData = new Uint8Array(LINE_CLEAR.length + frame.length);
      writeData.set(LINE_CLEAR);
      writeData.set(frame, LINE_CLEAR.length);
      writeSync(writeData);
      i = (i + 1) % this.#spinner.length;
    };
    this.#intervalId = setInterval(updateFrame, this.#interval);
  }
  /**
   * Stops the spinner.
   *
   * @example Usage
   * ```ts no-eval
   * import { Spinner } from "./spinner.ts";
   *
   * const spinner = new Spinner({ message: "Loading..." });
   * spinner.start();
   *
   * setTimeout(() => {
   *  spinner.stop();
   *  console.log("Finished loading!");
   * }, 3_000);
   * ```
   */
  stop() {
    if (this.#intervalId && this.#active) {
      clearInterval(this.#intervalId);
      writeSync(LINE_CLEAR);
      this.#active = false;
    }
  }
};

// https://jsr.io/@cliffy/command/1.0.0-rc.5/upgrade/upgrade.ts
init_colors();

// https://jsr.io/@cliffy/command/1.0.0-rc.5/upgrade/get_runtime.ts
async function getRuntime() {
  const { Deno: Deno4, process } = globalThis;
  if (Deno4?.version?.deno) {
    const { DenoRuntime: DenoRuntime2 } = await Promise.resolve().then(() => (init_deno_runtime(), deno_runtime_exports));
    return { runtimeName: "deno", runtime: new DenoRuntime2() };
  } else if (process?.versions?.bun) {
    const { BunRuntime: BunRuntime2 } = await Promise.resolve().then(() => (init_bun_runtime(), bun_runtime_exports));
    return { runtimeName: "bun", runtime: new BunRuntime2() };
  } else if (process?.versions?.node) {
    const { NodeRuntime: NodeRuntime2 } = await Promise.resolve().then(() => (init_node_runtime(), node_runtime_exports));
    return { runtimeName: "node", runtime: new NodeRuntime2() };
  } else {
    throw new Error("Unsupported runtime.");
  }
}

// https://jsr.io/@cliffy/command/1.0.0-rc.5/upgrade/upgrade.ts
async function upgrade({
  runtime: runtimeOptions,
  provider,
  ...options
}) {
  if (options.force || !options.from || await provider.isOutdated(options.name, options.from, options.to)) {
    if (options.to === "latest") {
      options.logger?.log(
        dim("Upgrading %s to the %s version"),
        options.name,
        options.to
      );
      const { latest } = await provider.getVersions(options.name);
      options.to = latest;
    } else {
      options.logger?.log(
        dim("Upgrading %s to version %s"),
        options.name,
        options.to
      );
    }
    options.logger?.log(dim("Upgrading %s:"), options.name);
    options.logger?.log(dim("  - current version: %s"), options.from);
    options.logger?.log(dim("  - target version: %s"), options.to);
    try {
      if (provider.upgrade) {
        await provider.upgrade(options);
      } else {
        const { runtimeName, runtime } = await getRuntime();
        options.logger?.log(dim("  - runtime: %s"), runtimeName);
        await runtime.upgrade({
          ...options,
          ...runtimeOptions?.[runtimeName] ?? {},
          provider
        });
      }
    } catch (error6) {
      options.logger?.error(
        red(
          `Failed to upgrade ${bold(options.name)} ${options.from ? `from version ${bold(options.from)} ` : ""}to ${bold(options.to)}.`
        )
      );
      throw error6;
    }
    options.logger?.info(
      brightBlue(
        `Successfully upgraded ${bold(options.name)} from version ${bold(options.from ?? "")} to ${bold(options.to)}!`
      ),
      dim(`(${provider.getRepositoryUrl(options.name, options.to)})`)
    );
  }
}

// https://jsr.io/@cliffy/command/1.0.0-rc.5/upgrade/upgrade_command.ts
var UpgradeCommand = class extends Command {
  providers;
  constructor({ provider, ...options }) {
    super();
    this.providers = Array.isArray(provider) ? provider : [provider];
    if (!this.providers.length) {
      throw new Error(`No upgrade provider defined!`);
    }
    this.description(
      () => `Upgrade ${this.getMainCommand().getName()} executable to latest or given version.`
    ).noGlobals().type("provider", new EnumType(this.getProviderNames())).option(
      "-r, --registry <name:provider>",
      `The registry name from which to upgrade.`,
      {
        default: this.getProvider().name,
        hidden: this.providers.length < 2,
        value: (registry) => this.getProvider(registry)
      }
    ).option(
      "-l, --list-versions",
      "Show available versions.",
      {
        action: async ({ registry }) => {
          await registry.listVersions(
            this.getMainCommand().getName(),
            this.getVersion()
          );
          exit(0);
        }
      }
    ).option(
      "--version <version:string:version>",
      "The version to upgrade to.",
      { default: "latest" }
    ).option(
      "-f, --force",
      "Replace current installation even if not out-of-date."
    ).option(
      "-v, --verbose",
      "Log verbose output."
    ).option("--no-spinner", "Disable spinner.").complete("version", () => this.getAllVersions()).action(
      async ({
        registry: provider2,
        version,
        force,
        verbose,
        spinner: spinnerEnabled
      }) => {
        const name = this.getMainCommand().getName();
        const currentVersion = this.getVersion();
        const spinner = spinnerEnabled ? new Spinner({
          message: brightBlue(
            `Upgrading ${bold(name)} from version ${bold(currentVersion ?? "")} to ${bold(version)}...`
          )
        }) : void 0;
        const logger = createLogger({ spinner, verbose });
        spinner?.start();
        provider2.setLogger(logger);
        try {
          await upgrade({
            name,
            to: version,
            from: currentVersion,
            force,
            provider: provider2,
            verbose,
            logger,
            ...options
          });
        } catch (error6) {
          logger.error(
            !verbose && error6 instanceof Error ? error6.message : error6
          );
          spinner?.stop();
          exit(1);
        } finally {
          spinner?.stop();
        }
      }
    );
  }
  async getAllVersions() {
    const { versions } = await this.getVersions();
    return versions;
  }
  async getLatestVersion() {
    const { latest } = await this.getVersions();
    return latest;
  }
  getVersions() {
    return this.getProvider().getVersions(
      this.getMainCommand().getName()
    );
  }
  getProvider(name) {
    const provider = name ? this.providers.find((provider2) => provider2.name === name) : this.providers[0];
    if (!provider) {
      throw new ValidationError2(`Unknown provider "${name}"`);
    }
    return provider;
  }
  getProviderNames() {
    return this.providers.map((provider) => provider.name);
  }
};

// https://jsr.io/@cliffy/command/1.0.0-rc.5/upgrade/provider/jsr.ts
var JsrProvider = class extends Provider {
  name = "jsr";
  repositoryUrl = "https://jsr.io/";
  packageName;
  packageScope;
  constructor({ main: main2, logger, ...options }) {
    super({ main: main2, logger });
    this.packageScope = "package" in options ? options.package.split("/")[0].slice(1) : options.scope;
    this.packageName = "package" in options ? options.package.split("/")[1] : options.name;
  }
  async getVersions(name) {
    const response = await fetch(`${this.getRepositoryUrl(name)}/meta.json`);
    if (!response.ok) {
      throw new Error(
        "couldn't fetch the latest version - try again after sometime"
      );
    }
    const { latest, versions } = await response.json();
    return {
      latest,
      versions: Object.keys(versions)
    };
  }
  getRepositoryUrl(name, version) {
    return new URL(
      `@${this.packageScope}/${this.packageName ?? name}${version ? `@${version}` : ""}`,
      this.repositoryUrl
    ).href;
  }
  getRegistryUrl(name, version) {
    return `jsr:@${this.packageScope}/${this.packageName ?? name}@${version}`;
  }
};

// deno.json
var deno_default = {
  name: "@ashishdotme/ap",
  version: "1.0.0",
  exports: "./ap.ts",
  license: "MIT",
  tasks: {
    dev: "deno run -A --watch src/ap.ts",
    lint: "deno lint",
    "lint:watch": "deno lint --watch",
    fmt: "deno fmt",
    "fmt:watch": "deno fmt --watch",
    bundle: "deno run -A ./src/bundle.ts",
    compile: "deno compile -A ./src/ap.ts"
  },
  imports: {
    "src/": "./src/",
    "std/": "https://deno.land/std@0.190.0/",
    "@cliffy/command": "jsr:@cliffy/command@1.0.0-rc.5",
    "@cliffy/table": "jsr:@cliffy/table@1.0.0-rc.5",
    "@std/encoding": "jsr:@std/encoding@1.0.1",
    "@std/fs": "jsr:@std/fs@0.229.3",
    "@std/path": "jsr:@std/path@1.0.0",
    "@std/streams": "jsr:@std/streams@0.224.5",
    emphasize: "npm:emphasize@7.0.0",
    "highlight.js": "npm:highlight.js@^11.10.0",
    open: "npm:open@10.1.0",
    shlex: "npm:shlex@2.1.2",
    "xdg-portable": "npm:xdg-portable",
    dayjs: "npm:date-fns"
  },
  fmt: {
    include: ["**/*.ts"]
  }
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/devlop@1.1.0/node_modules/devlop/lib/default.js
function ok() {
}

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/highlight.js@11.9.0/node_modules/highlight.js/es/core.js
var import_core = __toESM(require_core());
var core_default = import_core.default;

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/lowlight@3.1.0/node_modules/lowlight/lib/index.js
var emptyOptions = {};
var defaultPrefix = "hljs-";
function createLowlight(grammars) {
  const high = core_default.newInstance();
  if (grammars) {
    register(grammars);
  }
  return {
    highlight,
    highlightAuto,
    listLanguages,
    register,
    registerAlias,
    registered
  };
  function highlight(language, value, options) {
    ok(typeof language === "string", "expected `string` as `name`");
    ok(typeof value === "string", "expected `string` as `value`");
    const settings = options || emptyOptions;
    const prefix = typeof settings.prefix === "string" ? settings.prefix : defaultPrefix;
    if (!high.getLanguage(language)) {
      throw new Error("Unknown language: `" + language + "` is not registered");
    }
    high.configure({ __emitter: HastEmitter, classPrefix: prefix });
    const result = (
      /** @type {HighlightResult & {_emitter: HastEmitter}} */
      high.highlight(value, { ignoreIllegals: true, language })
    );
    if (result.errorRaised) {
      throw new Error("Could not highlight with `Highlight.js`", {
        cause: result.errorRaised
      });
    }
    const root = result._emitter.root;
    const data = (
      /** @type {RootData} */
      root.data
    );
    data.language = result.language;
    data.relevance = result.relevance;
    return root;
  }
  function highlightAuto(value, options) {
    ok(typeof value === "string", "expected `string` as `value`");
    const settings = options || emptyOptions;
    const subset = settings.subset || listLanguages();
    let index = -1;
    let relevance = 0;
    let result;
    while (++index < subset.length) {
      const name = subset[index];
      if (!high.getLanguage(name))
        continue;
      const current = highlight(name, value, options);
      if (current.data && current.data.relevance !== void 0 && current.data.relevance > relevance) {
        relevance = current.data.relevance;
        result = current;
      }
    }
    return result || {
      type: "root",
      children: [],
      data: { language: void 0, relevance }
    };
  }
  function listLanguages() {
    return high.listLanguages();
  }
  function register(grammarsOrName, grammar) {
    if (typeof grammarsOrName === "string") {
      ok(grammar !== void 0, "expected `grammar`");
      high.registerLanguage(grammarsOrName, grammar);
    } else {
      let name;
      for (name in grammarsOrName) {
        if (Object.hasOwn(grammarsOrName, name)) {
          high.registerLanguage(name, grammarsOrName[name]);
        }
      }
    }
  }
  function registerAlias(aliasesOrName, alias) {
    if (typeof aliasesOrName === "string") {
      ok(alias !== void 0);
      high.registerAliases(
        // Note: copy needed because hljs doesn’t accept readonly arrays yet.
        typeof alias === "string" ? alias : [...alias],
        { languageName: aliasesOrName }
      );
    } else {
      let key;
      for (key in aliasesOrName) {
        if (Object.hasOwn(aliasesOrName, key)) {
          const aliases = aliasesOrName[key];
          high.registerAliases(
            // Note: copy needed because hljs doesn’t accept readonly arrays yet.
            typeof aliases === "string" ? aliases : [...aliases],
            { languageName: key }
          );
        }
      }
    }
  }
  function registered(aliasOrName) {
    return Boolean(high.getLanguage(aliasOrName));
  }
}
var HastEmitter = class {
  /**
   * @param {Readonly<HljsOptions>} options
   *   Configuration.
   * @returns
   *   Instance.
   */
  constructor(options) {
    this.options = options;
    this.root = {
      type: "root",
      children: [],
      data: { language: void 0, relevance: 0 }
    };
    this.stack = [this.root];
  }
  /**
   * @param {string} value
   *   Text to add.
   * @returns {undefined}
   *   Nothing.
   *
   */
  addText(value) {
    if (value === "")
      return;
    const current = this.stack[this.stack.length - 1];
    const tail = current.children[current.children.length - 1];
    if (tail && tail.type === "text") {
      tail.value += value;
    } else {
      current.children.push({ type: "text", value });
    }
  }
  /**
   *
   * @param {unknown} rawName
   *   Name to add.
   * @returns {undefined}
   *   Nothing.
   */
  startScope(rawName) {
    this.openNode(String(rawName));
  }
  /**
   * @returns {undefined}
   *   Nothing.
   */
  endScope() {
    this.closeNode();
  }
  /**
   * @param {HastEmitter} other
   *   Other emitter.
   * @param {string} name
   *   Name of the sublanguage.
   * @returns {undefined}
   *   Nothing.
   */
  __addSublanguage(other, name) {
    const current = this.stack[this.stack.length - 1];
    const results = (
      /** @type {Array<ElementContent>} */
      other.root.children
    );
    if (name) {
      current.children.push({
        type: "element",
        tagName: "span",
        properties: { className: [name] },
        children: results
      });
    } else {
      current.children.push(...results);
    }
  }
  /**
   * @param {string} name
   *   Name to add.
   * @returns {undefined}
   *   Nothing.
   */
  openNode(name) {
    const self = this;
    const className = name.split(".").map(function(d, i) {
      return i ? d + "_".repeat(i) : self.options.classPrefix + d;
    });
    const current = this.stack[this.stack.length - 1];
    const child = {
      type: "element",
      tagName: "span",
      properties: { className },
      children: []
    };
    current.children.push(child);
    this.stack.push(child);
  }
  /**
   * @returns {undefined}
   *   Nothing.
   */
  closeNode() {
    this.stack.pop();
  }
  /**
   * @returns {undefined}
   *   Nothing.
   */
  finalize() {
  }
  /**
   * @returns {string}
   *   Nothing.
   */
  toHTML() {
    return "";
  }
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/chalk@5.3.0/node_modules/chalk/source/vendor/ansi-styles/index.js
var ANSI_BACKGROUND_OFFSET = 10;
var wrapAnsi16 = (offset = 0) => (code3) => `\x1B[${code3 + offset}m`;
var wrapAnsi256 = (offset = 0) => (code3) => `\x1B[${38 + offset};5;${code3}m`;
var wrapAnsi16m = (offset = 0) => (red3, green3, blue2) => `\x1B[${38 + offset};2;${red3};${green3};${blue2}m`;
var styles = {
  modifier: {
    reset: [0, 0],
    // 21 isn't widely supported and 22 does the same thing
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    overline: [53, 55],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29]
  },
  color: {
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    // Bright color
    blackBright: [90, 39],
    gray: [90, 39],
    // Alias of `blackBright`
    grey: [90, 39],
    // Alias of `blackBright`
    redBright: [91, 39],
    greenBright: [92, 39],
    yellowBright: [93, 39],
    blueBright: [94, 39],
    magentaBright: [95, 39],
    cyanBright: [96, 39],
    whiteBright: [97, 39]
  },
  bgColor: {
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],
    // Bright color
    bgBlackBright: [100, 49],
    bgGray: [100, 49],
    // Alias of `bgBlackBright`
    bgGrey: [100, 49],
    // Alias of `bgBlackBright`
    bgRedBright: [101, 49],
    bgGreenBright: [102, 49],
    bgYellowBright: [103, 49],
    bgBlueBright: [104, 49],
    bgMagentaBright: [105, 49],
    bgCyanBright: [106, 49],
    bgWhiteBright: [107, 49]
  }
};
var modifierNames = Object.keys(styles.modifier);
var foregroundColorNames = Object.keys(styles.color);
var backgroundColorNames = Object.keys(styles.bgColor);
var colorNames = [...foregroundColorNames, ...backgroundColorNames];
function assembleStyles() {
  const codes = /* @__PURE__ */ new Map();
  for (const [groupName, group] of Object.entries(styles)) {
    for (const [styleName, style] of Object.entries(group)) {
      styles[styleName] = {
        open: `\x1B[${style[0]}m`,
        close: `\x1B[${style[1]}m`
      };
      group[styleName] = styles[styleName];
      codes.set(style[0], style[1]);
    }
    Object.defineProperty(styles, groupName, {
      value: group,
      enumerable: false
    });
  }
  Object.defineProperty(styles, "codes", {
    value: codes,
    enumerable: false
  });
  styles.color.close = "\x1B[39m";
  styles.bgColor.close = "\x1B[49m";
  styles.color.ansi = wrapAnsi16();
  styles.color.ansi256 = wrapAnsi256();
  styles.color.ansi16m = wrapAnsi16m();
  styles.bgColor.ansi = wrapAnsi16(ANSI_BACKGROUND_OFFSET);
  styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
  styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
  Object.defineProperties(styles, {
    rgbToAnsi256: {
      value(red3, green3, blue2) {
        if (red3 === green3 && green3 === blue2) {
          if (red3 < 8) {
            return 16;
          }
          if (red3 > 248) {
            return 231;
          }
          return Math.round((red3 - 8) / 247 * 24) + 232;
        }
        return 16 + 36 * Math.round(red3 / 255 * 5) + 6 * Math.round(green3 / 255 * 5) + Math.round(blue2 / 255 * 5);
      },
      enumerable: false
    },
    hexToRgb: {
      value(hex) {
        const matches = /[a-f\d]{6}|[a-f\d]{3}/i.exec(hex.toString(16));
        if (!matches) {
          return [0, 0, 0];
        }
        let [colorString] = matches;
        if (colorString.length === 3) {
          colorString = [...colorString].map((character) => character + character).join("");
        }
        const integer2 = Number.parseInt(colorString, 16);
        return [
          /* eslint-disable no-bitwise */
          integer2 >> 16 & 255,
          integer2 >> 8 & 255,
          integer2 & 255
          /* eslint-enable no-bitwise */
        ];
      },
      enumerable: false
    },
    hexToAnsi256: {
      value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
      enumerable: false
    },
    ansi256ToAnsi: {
      value(code3) {
        if (code3 < 8) {
          return 30 + code3;
        }
        if (code3 < 16) {
          return 90 + (code3 - 8);
        }
        let red3;
        let green3;
        let blue2;
        if (code3 >= 232) {
          red3 = ((code3 - 232) * 10 + 8) / 255;
          green3 = red3;
          blue2 = red3;
        } else {
          code3 -= 16;
          const remainder = code3 % 36;
          red3 = Math.floor(code3 / 36) / 5;
          green3 = Math.floor(remainder / 6) / 5;
          blue2 = remainder % 6 / 5;
        }
        const value = Math.max(red3, green3, blue2) * 2;
        if (value === 0) {
          return 30;
        }
        let result = 30 + (Math.round(blue2) << 2 | Math.round(green3) << 1 | Math.round(red3));
        if (value === 2) {
          result += 60;
        }
        return result;
      },
      enumerable: false
    },
    rgbToAnsi: {
      value: (red3, green3, blue2) => styles.ansi256ToAnsi(styles.rgbToAnsi256(red3, green3, blue2)),
      enumerable: false
    },
    hexToAnsi: {
      value: (hex) => styles.ansi256ToAnsi(styles.hexToAnsi256(hex)),
      enumerable: false
    }
  });
  return styles;
}
var ansiStyles = assembleStyles();
var ansi_styles_default = ansiStyles;

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/chalk@5.3.0/node_modules/chalk/source/vendor/supports-color/browser.js
var level = (() => {
  if (navigator.userAgentData) {
    const brand = navigator.userAgentData.brands.find(({ brand: brand2 }) => brand2 === "Chromium");
    if (brand && brand.version > 93) {
      return 3;
    }
  }
  if (/\b(Chrome|Chromium)\//.test(navigator.userAgent)) {
    return 1;
  }
  return 0;
})();
var colorSupport = level !== 0 && {
  level,
  hasBasic: true,
  has256: level >= 2,
  has16m: level >= 3
};
var supportsColor = {
  stdout: colorSupport,
  stderr: colorSupport
};
var browser_default = supportsColor;

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/chalk@5.3.0/node_modules/chalk/source/utilities.js
function stringReplaceAll(string2, substring, replacer) {
  let index = string2.indexOf(substring);
  if (index === -1) {
    return string2;
  }
  const substringLength = substring.length;
  let endIndex = 0;
  let returnValue = "";
  do {
    returnValue += string2.slice(endIndex, index) + substring + replacer;
    endIndex = index + substringLength;
    index = string2.indexOf(substring, endIndex);
  } while (index !== -1);
  returnValue += string2.slice(endIndex);
  return returnValue;
}
function stringEncaseCRLFWithFirstIndex(string2, prefix, postfix, index) {
  let endIndex = 0;
  let returnValue = "";
  do {
    const gotCR = string2[index - 1] === "\r";
    returnValue += string2.slice(endIndex, gotCR ? index - 1 : index) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
    endIndex = index + 1;
    index = string2.indexOf("\n", endIndex);
  } while (index !== -1);
  returnValue += string2.slice(endIndex);
  return returnValue;
}

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/chalk@5.3.0/node_modules/chalk/source/index.js
var { stdout: stdoutColor, stderr: stderrColor } = browser_default;
var GENERATOR = Symbol("GENERATOR");
var STYLER = Symbol("STYLER");
var IS_EMPTY = Symbol("IS_EMPTY");
var levelMapping = [
  "ansi",
  "ansi",
  "ansi256",
  "ansi16m"
];
var styles2 = /* @__PURE__ */ Object.create(null);
var applyOptions = (object, options = {}) => {
  if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
    throw new Error("The `level` option should be an integer from 0 to 3");
  }
  const colorLevel = stdoutColor ? stdoutColor.level : 0;
  object.level = options.level === void 0 ? colorLevel : options.level;
};
var Chalk = class {
  constructor(options) {
    return chalkFactory(options);
  }
};
var chalkFactory = (options) => {
  const chalk3 = (...strings) => strings.join(" ");
  applyOptions(chalk3, options);
  Object.setPrototypeOf(chalk3, createChalk.prototype);
  return chalk3;
};
function createChalk(options) {
  return chalkFactory(options);
}
Object.setPrototypeOf(createChalk.prototype, Function.prototype);
for (const [styleName, style] of Object.entries(ansi_styles_default)) {
  styles2[styleName] = {
    get() {
      const builder = createBuilder(this, createStyler(style.open, style.close, this[STYLER]), this[IS_EMPTY]);
      Object.defineProperty(this, styleName, { value: builder });
      return builder;
    }
  };
}
styles2.visible = {
  get() {
    const builder = createBuilder(this, this[STYLER], true);
    Object.defineProperty(this, "visible", { value: builder });
    return builder;
  }
};
var getModelAnsi = (model, level2, type, ...arguments_) => {
  if (model === "rgb") {
    if (level2 === "ansi16m") {
      return ansi_styles_default[type].ansi16m(...arguments_);
    }
    if (level2 === "ansi256") {
      return ansi_styles_default[type].ansi256(ansi_styles_default.rgbToAnsi256(...arguments_));
    }
    return ansi_styles_default[type].ansi(ansi_styles_default.rgbToAnsi(...arguments_));
  }
  if (model === "hex") {
    return getModelAnsi("rgb", level2, type, ...ansi_styles_default.hexToRgb(...arguments_));
  }
  return ansi_styles_default[type][model](...arguments_);
};
var usedModels = ["rgb", "hex", "ansi256"];
for (const model of usedModels) {
  styles2[model] = {
    get() {
      const { level: level2 } = this;
      return function(...arguments_) {
        const styler = createStyler(getModelAnsi(model, levelMapping[level2], "color", ...arguments_), ansi_styles_default.color.close, this[STYLER]);
        return createBuilder(this, styler, this[IS_EMPTY]);
      };
    }
  };
  const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
  styles2[bgModel] = {
    get() {
      const { level: level2 } = this;
      return function(...arguments_) {
        const styler = createStyler(getModelAnsi(model, levelMapping[level2], "bgColor", ...arguments_), ansi_styles_default.bgColor.close, this[STYLER]);
        return createBuilder(this, styler, this[IS_EMPTY]);
      };
    }
  };
}
var proto = Object.defineProperties(() => {
}, {
  ...styles2,
  level: {
    enumerable: true,
    get() {
      return this[GENERATOR].level;
    },
    set(level2) {
      this[GENERATOR].level = level2;
    }
  }
});
var createStyler = (open, close, parent) => {
  let openAll;
  let closeAll;
  if (parent === void 0) {
    openAll = open;
    closeAll = close;
  } else {
    openAll = parent.openAll + open;
    closeAll = close + parent.closeAll;
  }
  return {
    open,
    close,
    openAll,
    closeAll,
    parent
  };
};
var createBuilder = (self, _styler, _isEmpty) => {
  const builder = (...arguments_) => applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
  Object.setPrototypeOf(builder, proto);
  builder[GENERATOR] = self;
  builder[STYLER] = _styler;
  builder[IS_EMPTY] = _isEmpty;
  return builder;
};
var applyStyle = (self, string2) => {
  if (self.level <= 0 || !string2) {
    return self[IS_EMPTY] ? "" : string2;
  }
  let styler = self[STYLER];
  if (styler === void 0) {
    return string2;
  }
  const { openAll, closeAll } = styler;
  if (string2.includes("\x1B")) {
    while (styler !== void 0) {
      string2 = stringReplaceAll(string2, styler.close, styler.open);
      styler = styler.parent;
    }
  }
  const lfIndex = string2.indexOf("\n");
  if (lfIndex !== -1) {
    string2 = stringEncaseCRLFWithFirstIndex(string2, closeAll, openAll, lfIndex);
  }
  return openAll + string2 + closeAll;
};
Object.defineProperties(createChalk.prototype, styles2);
var chalk = createChalk();
var chalkStderr = createChalk({ level: stderrColor ? stderrColor.level : 0 });

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/emphasize@7.0.0/node_modules/emphasize/lib/index.js
var chalk2 = new Chalk({ level: 2 });
var defaultSheet = {
  comment: chalk2.gray,
  quote: chalk2.gray,
  keyword: chalk2.green,
  "selector-tag": chalk2.green,
  addition: chalk2.green,
  number: chalk2.cyan,
  string: chalk2.cyan,
  "meta meta-string": chalk2.cyan,
  literal: chalk2.cyan,
  doctag: chalk2.cyan,
  regexp: chalk2.cyan,
  title: chalk2.blue,
  section: chalk2.blue,
  name: chalk2.blue,
  "selector-id": chalk2.blue,
  "selector-class": chalk2.blue,
  attribute: chalk2.yellow,
  attr: chalk2.yellow,
  variable: chalk2.yellow,
  "template-variable": chalk2.yellow,
  "class title": chalk2.yellow,
  type: chalk2.yellow,
  symbol: chalk2.magenta,
  bullet: chalk2.magenta,
  subst: chalk2.magenta,
  meta: chalk2.magenta,
  "meta keyword": chalk2.magenta,
  "selector-attr": chalk2.magenta,
  "selector-pseudo": chalk2.magenta,
  link: chalk2.magenta,
  /* eslint-disable camelcase */
  built_in: chalk2.red,
  /* eslint-enable camelcase */
  deletion: chalk2.red,
  emphasis: chalk2.italic,
  strong: chalk2.bold,
  formula: chalk2.inverse
};
function createEmphasize(grammars) {
  const lowlight = createLowlight(grammars);
  return {
    highlight,
    highlightAuto,
    listLanguages: lowlight.listLanguages,
    register: lowlight.register,
    registerAlias: lowlight.registerAlias,
    registered: lowlight.registered
  };
  function highlight(language, value, sheet) {
    const result = lowlight.highlight(language, value);
    const data = (
      /** @type {RootData} */
      result.data
    );
    return {
      language: data.language,
      relevance: data.relevance,
      value: visit(sheet || defaultSheet, result)
    };
  }
  function highlightAuto(value, options) {
    let sheet;
    let config;
    if (options && ("subset" in options || "sheet" in options)) {
      const settings = (
        /** @type {Readonly<AutoOptions>} */
        options
      );
      config = { subset: settings.subset };
      sheet = settings.sheet;
    } else {
      sheet = /** @type {Readonly<Sheet> | null | undefined} */
      options;
    }
    const result = lowlight.highlightAuto(value, config);
    const data = (
      /** @type {RootData} */
      result.data
    );
    return {
      language: data.language,
      relevance: data.relevance,
      value: visit(sheet || defaultSheet, result)
    };
  }
}
function visit(sheet, node) {
  const names = new Set(
    node.type === "element" && Array.isArray(node.properties.className) ? node.properties.className.map(function(d) {
      return String(d).replace(/^hljs-/, "");
    }) : []
  );
  const scoped = {};
  let style;
  let content = "";
  let key;
  for (key in sheet) {
    if (Object.hasOwn(sheet, key)) {
      const parts = key.split(" ");
      const color = sheet[key];
      if (names.has(parts[0])) {
        if (parts.length === 1) {
          style = color;
        } else {
          scoped[parts.slice(1).join(" ")] = color;
        }
      } else {
        scoped[key] = color;
      }
    }
  }
  if ("value" in node) {
    content = node.value;
  } else if ("children" in node) {
    content = all(
      scoped,
      /** @type {ReadonlyArray<Element | Text>} */
      node.children
    );
  }
  if (style) {
    content = style(content);
  }
  return content;
}
function all(sheet, nodes) {
  const result = [];
  let index = -1;
  while (++index < nodes.length) {
    result.push(visit(sheet, nodes[index]));
  }
  return result.join("");
}

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/highlight.js@11.10.0/node_modules/highlight.js/es/languages/json.js
function json(hljs) {
  const ATTRIBUTE = {
    className: "attr",
    begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
    relevance: 1.01
  };
  const PUNCTUATION = {
    match: /[{}[\],:]/,
    className: "punctuation",
    relevance: 0
  };
  const LITERALS = [
    "true",
    "false",
    "null"
  ];
  const LITERALS_MODE = {
    scope: "literal",
    beginKeywords: LITERALS.join(" ")
  };
  return {
    name: "JSON",
    aliases: ["jsonc"],
    keywords: {
      literal: LITERALS
    },
    contains: [
      ATTRIBUTE,
      PUNCTUATION,
      hljs.QUOTE_STRING_MODE,
      LITERALS_MODE,
      hljs.C_NUMBER_MODE,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE
    ],
    illegal: "\\S"
  };
}

// src/common/lib.ts
var ashishdotmeToken = Deno.env.get("ASHISHDOTME_TOKEN") || "";
if (!ashishdotmeToken) {
  console.error("ASHISHDOTME_TOKEN is required");
  Deno.exit(1);
}
async function callApi(path3, api, options) {
  const apiURL = api || "https://api.ashish.me";
  const headers = {
    ...options?.headers,
    apiKey: `${ashishdotmeToken}`
  };
  if (options?.paginate) {
    const data = [];
    let url = new URL(`${apiURL}${path3}`);
    url.searchParams.set("limit", "100");
    while (true) {
      const resp = await fetch(url, {
        headers
      });
      if (!resp.ok) {
        throw new Error(await resp.text());
      }
      const res = await resp.json();
      data.push(...res.data);
      if (!res.links.next) {
        break;
      }
      url = new URL(res.links.next);
    }
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  return await fetch(`${apiURL}${path3}`, {
    ...options,
    headers
  });
}
async function callJobsApi(path3, options) {
  const apiURL = Deno.env.get("ASHISHDOTME_API_URL") || "https://jobsapi.ashish.me";
  const headers = {
    ...options?.headers,
    apiKey: `${ashishdotmeToken}`
  };
  if (options?.paginate) {
    const data = [];
    let url = new URL(`${apiURL}${path3}`);
    url.searchParams.set("limit", "100");
    while (true) {
      const resp = await fetch(url, {
        headers
      });
      if (!resp.ok) {
        throw new Error(await resp.text());
      }
      const res = await resp.json();
      data.push(...res.data);
      if (!res.links.next) {
        break;
      }
      url = new URL(res.links.next);
    }
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  return await fetch(`${apiURL}${path3}`, {
    ...options,
    headers
  });
}
function printJson(obj) {
  if (Deno.stdout.isTerminal()) {
    const emphasize = createEmphasize();
    emphasize.register({
      json
    });
    console.log(
      emphasize.highlight("json", JSON.stringify(obj, null, 2)).value
    );
  } else {
    console.log(JSON.stringify(obj));
  }
}

// https://jsr.io/@std/datetime/0.224.0/_date_time_formatter.ts
var Tokenizer = class {
  rules;
  constructor(rules = []) {
    this.rules = rules;
  }
  addRule(test, fn) {
    this.rules.push({ test, fn });
    return this;
  }
  tokenize(string2, receiver = (token) => token) {
    function* generator(rules) {
      let index = 0;
      for (const rule of rules) {
        const result = rule.test(string2);
        if (result) {
          const { value, length } = result;
          index += length;
          string2 = string2.slice(length);
          const token = { ...rule.fn(value), index };
          yield receiver(token);
          yield* generator(rules);
        }
      }
    }
    const tokenGenerator = generator(this.rules);
    const tokens = [];
    for (const token of tokenGenerator) {
      tokens.push(token);
    }
    if (string2.length) {
      throw new Error(
        `parser error: string not fully parsed! ${string2.slice(0, 25)}`
      );
    }
    return tokens;
  }
};
function digits(value, count = 2) {
  return String(value).padStart(count, "0");
}
function createLiteralTestFunction(value) {
  return (string2) => {
    return string2.startsWith(value) ? { value, length: value.length } : void 0;
  };
}
function createMatchTestFunction(match2) {
  return (string2) => {
    const result = match2.exec(string2);
    if (result)
      return { value: result, length: result[0].length };
  };
}
var defaultRules = [
  {
    test: createLiteralTestFunction("yyyy"),
    fn: () => ({ type: "year", value: "numeric" })
  },
  {
    test: createLiteralTestFunction("yy"),
    fn: () => ({ type: "year", value: "2-digit" })
  },
  {
    test: createLiteralTestFunction("MM"),
    fn: () => ({ type: "month", value: "2-digit" })
  },
  {
    test: createLiteralTestFunction("M"),
    fn: () => ({ type: "month", value: "numeric" })
  },
  {
    test: createLiteralTestFunction("dd"),
    fn: () => ({ type: "day", value: "2-digit" })
  },
  {
    test: createLiteralTestFunction("d"),
    fn: () => ({ type: "day", value: "numeric" })
  },
  {
    test: createLiteralTestFunction("HH"),
    fn: () => ({ type: "hour", value: "2-digit" })
  },
  {
    test: createLiteralTestFunction("H"),
    fn: () => ({ type: "hour", value: "numeric" })
  },
  {
    test: createLiteralTestFunction("hh"),
    fn: () => ({
      type: "hour",
      value: "2-digit",
      hour12: true
    })
  },
  {
    test: createLiteralTestFunction("h"),
    fn: () => ({
      type: "hour",
      value: "numeric",
      hour12: true
    })
  },
  {
    test: createLiteralTestFunction("mm"),
    fn: () => ({ type: "minute", value: "2-digit" })
  },
  {
    test: createLiteralTestFunction("m"),
    fn: () => ({ type: "minute", value: "numeric" })
  },
  {
    test: createLiteralTestFunction("ss"),
    fn: () => ({ type: "second", value: "2-digit" })
  },
  {
    test: createLiteralTestFunction("s"),
    fn: () => ({ type: "second", value: "numeric" })
  },
  {
    test: createLiteralTestFunction("SSS"),
    fn: () => ({ type: "fractionalSecond", value: 3 })
  },
  {
    test: createLiteralTestFunction("SS"),
    fn: () => ({ type: "fractionalSecond", value: 2 })
  },
  {
    test: createLiteralTestFunction("S"),
    fn: () => ({ type: "fractionalSecond", value: 1 })
  },
  {
    test: createLiteralTestFunction("a"),
    fn: (value) => ({
      type: "dayPeriod",
      value
    })
  },
  // quoted literal
  {
    test: createMatchTestFunction(/^(')(?<value>\\.|[^\']*)\1/),
    fn: (match2) => ({
      type: "literal",
      value: match2.groups.value
    })
  },
  // literal
  {
    test: createMatchTestFunction(/^.+?\s*/),
    fn: (match2) => ({
      type: "literal",
      value: match2[0]
    })
  }
];
var DateTimeFormatter = class {
  #format;
  constructor(formatString, rules = defaultRules) {
    const tokenizer = new Tokenizer(rules);
    this.#format = tokenizer.tokenize(
      formatString,
      ({ type, value, hour12 }) => {
        const result = {
          type,
          value
        };
        if (hour12)
          result.hour12 = hour12;
        return result;
      }
    );
  }
  format(date, options = {}) {
    let string2 = "";
    const utc = options.timeZone === "UTC";
    for (const token of this.#format) {
      const type = token.type;
      switch (type) {
        case "year": {
          const value = utc ? date.getUTCFullYear() : date.getFullYear();
          switch (token.value) {
            case "numeric": {
              string2 += value;
              break;
            }
            case "2-digit": {
              string2 += digits(value, 2).slice(-2);
              break;
            }
            default:
              throw Error(
                `FormatterError: value "${token.value}" is not supported`
              );
          }
          break;
        }
        case "month": {
          const value = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
          switch (token.value) {
            case "numeric": {
              string2 += value;
              break;
            }
            case "2-digit": {
              string2 += digits(value, 2);
              break;
            }
            default:
              throw Error(
                `FormatterError: value "${token.value}" is not supported`
              );
          }
          break;
        }
        case "day": {
          const value = utc ? date.getUTCDate() : date.getDate();
          switch (token.value) {
            case "numeric": {
              string2 += value;
              break;
            }
            case "2-digit": {
              string2 += digits(value, 2);
              break;
            }
            default:
              throw Error(
                `FormatterError: value "${token.value}" is not supported`
              );
          }
          break;
        }
        case "hour": {
          let value = utc ? date.getUTCHours() : date.getHours();
          if (token.hour12) {
            if (value === 0)
              value = 12;
            else if (value > 12)
              value -= 12;
          }
          switch (token.value) {
            case "numeric": {
              string2 += value;
              break;
            }
            case "2-digit": {
              string2 += digits(value, 2);
              break;
            }
            default:
              throw Error(
                `FormatterError: value "${token.value}" is not supported`
              );
          }
          break;
        }
        case "minute": {
          const value = utc ? date.getUTCMinutes() : date.getMinutes();
          switch (token.value) {
            case "numeric": {
              string2 += value;
              break;
            }
            case "2-digit": {
              string2 += digits(value, 2);
              break;
            }
            default:
              throw Error(
                `FormatterError: value "${token.value}" is not supported`
              );
          }
          break;
        }
        case "second": {
          const value = utc ? date.getUTCSeconds() : date.getSeconds();
          switch (token.value) {
            case "numeric": {
              string2 += value;
              break;
            }
            case "2-digit": {
              string2 += digits(value, 2);
              break;
            }
            default:
              throw Error(
                `FormatterError: value "${token.value}" is not supported`
              );
          }
          break;
        }
        case "fractionalSecond": {
          const value = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
          string2 += digits(value, Number(token.value));
          break;
        }
        case "timeZoneName": {
          break;
        }
        case "dayPeriod": {
          string2 += token.value ? date.getHours() >= 12 ? "PM" : "AM" : "";
          break;
        }
        case "literal": {
          string2 += token.value;
          break;
        }
        default:
          throw Error(`FormatterError: { ${token.type} ${token.value} }`);
      }
    }
    return string2;
  }
  parseToParts(string2) {
    const parts = [];
    for (const token of this.#format) {
      const type = token.type;
      let value = "";
      switch (token.type) {
        case "year": {
          switch (token.value) {
            case "numeric": {
              value = /^\d{1,4}/.exec(string2)?.[0];
              break;
            }
            case "2-digit": {
              value = /^\d{1,2}/.exec(string2)?.[0];
              break;
            }
          }
          break;
        }
        case "month": {
          switch (token.value) {
            case "numeric": {
              value = /^\d{1,2}/.exec(string2)?.[0];
              break;
            }
            case "2-digit": {
              value = /^\d{2}/.exec(string2)?.[0];
              break;
            }
            case "narrow": {
              value = /^[a-zA-Z]+/.exec(string2)?.[0];
              break;
            }
            case "short": {
              value = /^[a-zA-Z]+/.exec(string2)?.[0];
              break;
            }
            case "long": {
              value = /^[a-zA-Z]+/.exec(string2)?.[0];
              break;
            }
            default:
              throw Error(
                `ParserError: value "${token.value}" is not supported`
              );
          }
          break;
        }
        case "day": {
          switch (token.value) {
            case "numeric": {
              value = /^\d{1,2}/.exec(string2)?.[0];
              break;
            }
            case "2-digit": {
              value = /^\d{2}/.exec(string2)?.[0];
              break;
            }
            default:
              throw Error(
                `ParserError: value "${token.value}" is not supported`
              );
          }
          break;
        }
        case "hour": {
          switch (token.value) {
            case "numeric": {
              value = /^\d{1,2}/.exec(string2)?.[0];
              if (token.hour12 && parseInt(value) > 12) {
                console.error(
                  `Trying to parse hour greater than 12. Use 'H' instead of 'h'.`
                );
              }
              break;
            }
            case "2-digit": {
              value = /^\d{2}/.exec(string2)?.[0];
              if (token.hour12 && parseInt(value) > 12) {
                console.error(
                  `Trying to parse hour greater than 12. Use 'HH' instead of 'hh'.`
                );
              }
              break;
            }
            default:
              throw Error(
                `ParserError: value "${token.value}" is not supported`
              );
          }
          break;
        }
        case "minute": {
          switch (token.value) {
            case "numeric": {
              value = /^\d{1,2}/.exec(string2)?.[0];
              break;
            }
            case "2-digit": {
              value = /^\d{2}/.exec(string2)?.[0];
              break;
            }
            default:
              throw Error(
                `ParserError: value "${token.value}" is not supported`
              );
          }
          break;
        }
        case "second": {
          switch (token.value) {
            case "numeric": {
              value = /^\d{1,2}/.exec(string2)?.[0];
              break;
            }
            case "2-digit": {
              value = /^\d{2}/.exec(string2)?.[0];
              break;
            }
            default:
              throw Error(
                `ParserError: value "${token.value}" is not supported`
              );
          }
          break;
        }
        case "fractionalSecond": {
          value = new RegExp(`^\\d{${token.value}}`).exec(string2)?.[0];
          break;
        }
        case "timeZoneName": {
          value = token.value;
          break;
        }
        case "dayPeriod": {
          value = /^(A|P)M/.exec(string2)?.[0];
          break;
        }
        case "literal": {
          if (!string2.startsWith(token.value)) {
            throw Error(
              `Literal "${token.value}" not found "${string2.slice(0, 25)}"`
            );
          }
          value = token.value;
          break;
        }
        default:
          throw Error(`${token.type} ${token.value}`);
      }
      if (!value) {
        throw Error(
          `value not valid for token { ${type} ${value} } ${string2.slice(
            0,
            25
          )}`
        );
      }
      parts.push({ type, value });
      string2 = string2.slice(value.length);
    }
    if (string2.length) {
      throw Error(
        `datetime string was not fully parsed! ${string2.slice(0, 25)}`
      );
    }
    return parts;
  }
  /** sort & filter dateTimeFormatPart */
  sortDateTimeFormatPart(parts) {
    let result = [];
    const typeArray = [
      "year",
      "month",
      "day",
      "hour",
      "minute",
      "second",
      "fractionalSecond"
    ];
    for (const type of typeArray) {
      const current = parts.findIndex((el) => el.type === type);
      if (current !== -1) {
        result = result.concat(parts.splice(current, 1));
      }
    }
    result = result.concat(parts);
    return result;
  }
  partsToDate(parts) {
    const date = /* @__PURE__ */ new Date();
    const utc = parts.find(
      (part) => part.type === "timeZoneName" && part.value === "UTC"
    );
    const dayPart = parts.find((part) => part.type === "day");
    utc ? date.setUTCHours(0, 0, 0, 0) : date.setHours(0, 0, 0, 0);
    for (const part of parts) {
      switch (part.type) {
        case "year": {
          const value = Number(part.value.padStart(4, "20"));
          utc ? date.setUTCFullYear(value) : date.setFullYear(value);
          break;
        }
        case "month": {
          const value = Number(part.value) - 1;
          if (dayPart) {
            utc ? date.setUTCMonth(value, Number(dayPart.value)) : date.setMonth(value, Number(dayPart.value));
          } else {
            utc ? date.setUTCMonth(value) : date.setMonth(value);
          }
          break;
        }
        case "day": {
          const value = Number(part.value);
          utc ? date.setUTCDate(value) : date.setDate(value);
          break;
        }
        case "hour": {
          let value = Number(part.value);
          const dayPeriod = parts.find(
            (part2) => part2.type === "dayPeriod"
          );
          if (dayPeriod?.value === "PM")
            value += 12;
          utc ? date.setUTCHours(value) : date.setHours(value);
          break;
        }
        case "minute": {
          const value = Number(part.value);
          utc ? date.setUTCMinutes(value) : date.setMinutes(value);
          break;
        }
        case "second": {
          const value = Number(part.value);
          utc ? date.setUTCSeconds(value) : date.setSeconds(value);
          break;
        }
        case "fractionalSecond": {
          const value = Number(part.value);
          utc ? date.setUTCMilliseconds(value) : date.setMilliseconds(value);
          break;
        }
      }
    }
    return date;
  }
  parse(string2) {
    const parts = this.parseToParts(string2);
    const sortParts = this.sortDateTimeFormatPart(parts);
    return this.partsToDate(sortParts);
  }
};

// https://jsr.io/@std/datetime/0.224.0/format.ts
function format(date, formatString, options = {}) {
  const formatter = new DateTimeFormatter(formatString);
  return formatter.format(
    date,
    options.utc ? { timeZone: "UTC" } : void 0
  );
}

// https://jsr.io/@cliffy/ansi/1.0.0-rc.5/colors.ts
init_colors();
var proto2 = /* @__PURE__ */ Object.create(null);
var methodNames = Object.keys(colors_exports);
for (const name of methodNames) {
  if (name === "setColorEnabled" || name === "getColorEnabled") {
    continue;
  }
  Object.defineProperty(proto2, name, {
    get() {
      return factory([...this._stack, name]);
    }
  });
}
var colors = factory();
function factory(stack = []) {
  const colors2 = function(str, ...args) {
    if (typeof str !== "undefined") {
      const lastIndex = stack.length - 1;
      return stack.reduce(
        (str2, name, index) => index === lastIndex ? colors_exports[name](str2, ...args) : colors_exports[name](str2),
        str
      );
    }
    const tmp = stack.slice();
    stack = [];
    return factory(tmp);
  };
  Object.setPrototypeOf(colors2, proto2);
  colors2._stack = stack;
  return colors2;
}

// src/commands/movie.ts
var error = colors.bold.red;
var warn = colors.bold.yellow;
var info = colors.bold.blue;
var movieCmd = new Command().name("movie").description("Manage movies.").action(() => {
  movieCmd.showHelp();
});
movieCmd.command("list").description("List movies.").option("--limit <limit:number>", "Limit", {
  default: 10
}).option("--json", "Output as JSON").action(async (options) => {
  const resp = await callApi(`/movies?limit=${options.limit}`);
  if (!resp.ok) {
    console.error(await resp.text());
    Deno.exit(1);
  }
  const data = await resp.json();
  if (!data) {
    console.log(error("[ERROR]"), "invalid response");
    Deno.exit(1);
  }
  if (options.json) {
    printJson(data);
    Deno.exit(0);
  }
  const rows = data.map((movie) => {
    return [movie.title, format(new Date(movie.viewingDate), "dd-MM-yyyy")];
  });
  if (Deno.stdout.isTerminal()) {
    const table = new Table(...rows).header([info("Title"), info("Date")]);
    table.render();
  } else {
    console.log(rows.map((row) => row.join("	")).join("\n"));
  }
});
movieCmd.command("add").option("--json", "Output as JSON").arguments("<title:string> [date:string]").description("add movie.").action(async (options, title, date) => {
  let resp = await callJobsApi("/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title,
      date
    })
  });
  if (!resp.ok) {
    console.log("[ERROR]", await resp.text());
    Deno.exit(1);
  }
  const movie = await resp.json();
  console.log(`Created ${movie.title}`);
  resp = await callApi(`/movies?limit=10`);
  if (!resp.ok) {
    console.error(await resp.text());
    Deno.exit(1);
  }
  const data = await resp.json();
  if (!data) {
    console.log(error("[ERROR]"), "invalid response");
    Deno.exit(1);
  }
  const rows = data.map((movie2) => {
    return [movie2.title, format(new Date(movie2.viewingDate), "dd-MM-yyyy")];
  });
  if (Deno.stdout.isTerminal()) {
    const table = new Table(...rows).header([info("Name"), info("Date")]);
    table.render();
  } else {
    console.log(rows.map((row) => row.join("	")).join("\n"));
  }
});

// src/commands/event.ts
var error2 = colors.bold.red;
var warn2 = colors.bold.yellow;
var info2 = colors.bold.blue;
var eventCmd = new Command().name("event").description("Manage events.").action(() => {
  eventCmd.showHelp();
});
eventCmd.command("list").description("List events.").option("--limit <limit:number>", "Limit", {
  default: 20
}).option("--json", "Output as JSON").action(async (options) => {
  const resp = await callApi(`/events?limit=${options.limit}`);
  if (!resp.ok) {
    console.error(await resp.text());
    Deno.exit(1);
  }
  const data = await resp.json();
  if (!data) {
    console.log(error2("[ERROR]"), "invalid response");
    Deno.exit(1);
  }
  if (options.json) {
    printJson(data);
    Deno.exit(0);
  }
  const rows = data.map((event) => {
    return [event.type, event.message];
  });
  if (Deno.stdout.isTerminal()) {
    const table = new Table(...rows).header([info2("Type"), info2("Message")]);
    table.render();
  } else {
    console.log(rows.map((row) => row.join("	")).join("\n"));
  }
});

// src/commands/transactions.ts
var error3 = colors.bold.red;
var warn3 = colors.bold.yellow;
var info3 = colors.bold.blue;
var transactionCmd = new Command().name("transaction").description("Manage transactions.").action(async (options) => {
  const resp = await callApi(`/transactions/total`);
  if (!resp.ok) {
    console.error(await resp.text());
    Deno.exit(1);
  }
  const data = await resp.json();
  if (!data) {
    console.log(error3("[ERROR]"), "invalid response");
    Deno.exit(1);
  }
  console.log(error3(`Total - ${data.total}`));
  const rows = data.categories.map((transaction) => {
    return [transaction.category, transaction.amount];
  });
  if (Deno.stdout.isTerminal()) {
    const table = new Table(...rows).header([info3("Category"), info3("Amount")]);
    table.render();
  } else {
    console.log(rows.map((row) => row.join("	")).join("\n"));
  }
});
transactionCmd.command("list").description("List transactions.").option("--limit <limit:number>", "Limit", {
  default: 20
}).option("--json", "Output as JSON").action(async (options) => {
  const resp = await callApi(`/transactions?limit=${options.limit}`);
  if (!resp.ok) {
    console.error(await resp.text());
    Deno.exit(1);
  }
  const data = await resp.json();
  if (!data) {
    console.log(error3("[ERROR]"), "invalid response");
    Deno.exit(1);
  }
  if (options.json) {
    printJson(data);
    Deno.exit(0);
  }
  const rows = data.map((transaction) => {
    return [transaction.amount, transaction.merchant];
  });
  if (Deno.stdout.isTerminal()) {
    const table = new Table(...rows).header([info3("Amount"), info3("Merchant")]);
    table.render();
  } else {
    console.log(rows.map((row) => row.join("	")).join("\n"));
  }
});
transactionCmd.command("add").option("--json", "Output as JSON").arguments("<transaction:string>").description("add transaction.").action(async (options, transaction) => {
  let resp = await callJobsApi("/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      transaction
    })
  });
  if (!resp.ok) {
    console.log("[ERROR]", await resp.text());
    Deno.exit(1);
  }
  const newTransaction = await resp.json();
  console.log(`Created ${newTransaction.title}`);
  resp = await callApi(`/transactions?limit=10`);
  if (!resp.ok) {
    console.error(await resp.text());
    Deno.exit(1);
  }
  const data = await resp.json();
  if (!data) {
    console.log(error3("[ERROR]"), "invalid response");
    Deno.exit(1);
  }
  const rows = data.map((transaction2) => {
    return [transaction2.amount, transaction2.merchant];
  });
  if (Deno.stdout.isTerminal()) {
    const table = new Table(...rows).header([info3("Amount"), info3("Merchant")]);
    table.render();
  } else {
    console.log(rows.map((row) => row.join("	")).join("\n"));
  }
});

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/constants.js
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
var minTime = -maxTime;
var millisecondsInWeek = 6048e5;
var millisecondsInDay = 864e5;
var secondsInHour = 3600;
var secondsInDay = secondsInHour * 24;
var secondsInWeek = secondsInDay * 7;
var secondsInYear = secondsInDay * daysInYear;
var secondsInMonth = secondsInYear / 12;
var secondsInQuarter = secondsInMonth * 3;
var constructFromSymbol = Symbol.for("constructDateFrom");

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/constructFrom.js
function constructFrom(date, value) {
  if (typeof date === "function")
    return date(value);
  if (date && typeof date === "object" && constructFromSymbol in date)
    return date[constructFromSymbol](value);
  if (date instanceof Date)
    return new date.constructor(value);
  return new Date(value);
}

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/toDate.js
function toDate(argument, context) {
  return constructFrom(context || argument, argument);
}

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/_lib/defaultOptions.js
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/startOfWeek.js
function startOfWeek(date, options) {
  const defaultOptions2 = getDefaultOptions();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const _date = toDate(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/startOfISOWeek.js
function startOfISOWeek(date, options) {
  return startOfWeek(date, { ...options, weekStartsOn: 1 });
}

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/getISOWeekYear.js
function getISOWeekYear(date, options) {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();
  const fourthOfJanuaryOfNextYear = constructFrom(_date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  const fourthOfJanuaryOfThisYear = constructFrom(_date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function getTimezoneOffsetInMilliseconds(date) {
  const _date = toDate(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds()
    )
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/_lib/normalizeDates.js
function normalizeDates(context, ...dates) {
  const normalize5 = constructFrom.bind(
    null,
    context || dates.find((date) => typeof date === "object")
  );
  return dates.map(normalize5);
}

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/startOfDay.js
function startOfDay(date, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/differenceInCalendarDays.js
function differenceInCalendarDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const laterStartOfDay = startOfDay(laterDate_);
  const earlierStartOfDay = startOfDay(earlierDate_);
  const laterTimestamp = +laterStartOfDay - getTimezoneOffsetInMilliseconds(laterStartOfDay);
  const earlierTimestamp = +earlierStartOfDay - getTimezoneOffsetInMilliseconds(earlierStartOfDay);
  return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInDay);
}

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/startOfISOWeekYear.js
function startOfISOWeekYear(date, options) {
  const year = getISOWeekYear(date, options);
  const fourthOfJanuary = constructFrom(options?.in || date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return startOfISOWeek(fourthOfJanuary);
}

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/isDate.js
function isDate(value) {
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/isValid.js
function isValid(date) {
  return !(!isDate(date) && typeof date !== "number" || isNaN(+toDate(date)));
}

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/startOfYear.js
function startOfYear(date, options) {
  const date_ = toDate(date, options?.in);
  date_.setFullYear(date_.getFullYear(), 0, 1);
  date_.setHours(0, 0, 0, 0);
  return date_;
}

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
var formatDistance = (token, count, options) => {
  let result;
  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function buildFormatLongFn(args) {
  return (options = {}) => {
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format6 = args.formats[width] || args.formats[args.defaultWidth];
    return format6;
  };
}

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/locale/en-US/_lib/formatLong.js
var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/locale/en-US/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
var formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";
    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;
    return valuesArray[index];
  };
}

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/locale/en-US/_lib/localize.js
var eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
};
var dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
var ordinalNumber = (dirtyNumber, _options) => {
  const number2 = Number(dirtyNumber);
  const rem100 = number2 % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number2 + "st";
      case 2:
        return number2 + "nd";
      case 3:
        return number2 + "rd";
    }
  }
  return number2 + "th";
};
var localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildMatchFn.js
function buildMatchFn(args) {
  return (string2, options = {}) => {
    const width = options.width;
    const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string2.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];
    const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : (
      // [TODO] -- I challenge you to fix the type
      findKey(parsePatterns, (pattern) => pattern.test(matchedString))
    );
    let value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      options.valueCallback(value)
    ) : value;
    const rest = string2.slice(matchedString.length);
    return { value, rest };
  };
}
function findKey(object, predicate) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function buildMatchPatternFn(args) {
  return (string2, options = {}) => {
    const matchResult = string2.match(args.matchPattern);
    if (!matchResult)
      return null;
    const matchedString = matchResult[0];
    const parseResult = string2.match(args.parsePattern);
    if (!parseResult)
      return null;
    let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    const rest = string2.slice(matchedString.length);
    return { value, rest };
  };
}

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/locale/en-US/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10)
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/locale/en-US.js
var enUS = {
  code: "en-US",
  formatDistance,
  formatLong,
  formatRelative,
  localize,
  match,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/getDayOfYear.js
function getDayOfYear(date, options) {
  const _date = toDate(date, options?.in);
  const diff = differenceInCalendarDays(_date, startOfYear(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/getISOWeek.js
function getISOWeek(date, options) {
  const _date = toDate(date, options?.in);
  const diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);
  return Math.round(diff / millisecondsInWeek) + 1;
}

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/getWeekYear.js
function getWeekYear(date, options) {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const firstWeekOfNextYear = constructFrom(options?.in || date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
  const firstWeekOfThisYear = constructFrom(options?.in || date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
  if (+_date >= +startOfNextYear) {
    return year + 1;
  } else if (+_date >= +startOfThisYear) {
    return year;
  } else {
    return year - 1;
  }
}

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/startOfWeekYear.js
function startOfWeekYear(date, options) {
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const year = getWeekYear(date, options);
  const firstWeek = constructFrom(options?.in || date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = startOfWeek(firstWeek, options);
  return _date;
}

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/getWeek.js
function getWeek(date, options) {
  const _date = toDate(date, options?.in);
  const diff = +startOfWeek(_date, options) - +startOfWeekYear(_date, options);
  return Math.round(diff / millisecondsInWeek) + 1;
}

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/_lib/addLeadingZeros.js
function addLeadingZeros(number2, targetLength) {
  const sign = number2 < 0 ? "-" : "";
  const output = Math.abs(number2).toString().padStart(targetLength, "0");
  return sign + output;
}

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/_lib/format/lightFormatters.js
var lightFormatters = {
  // Year
  y(date, token) {
    const signedYear = date.getFullYear();
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d(date, token) {
    return addLeadingZeros(date.getDate(), token.length);
  },
  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(date, token) {
    return addLeadingZeros(date.getHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H(date, token) {
    return addLeadingZeros(date.getHours(), token.length);
  },
  // Minute
  m(date, token) {
    return addLeadingZeros(date.getMinutes(), token.length);
  },
  // Second
  s(date, token) {
    return addLeadingZeros(date.getSeconds(), token.length);
  },
  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3)
    );
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/_lib/format/formatters.js
var dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
var formatters = {
  // Era
  G: function(date, token, localize2) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      case "G":
      case "GG":
      case "GGG":
        return localize2.era(era, { width: "abbreviated" });
      case "GGGGG":
        return localize2.era(era, { width: "narrow" });
      case "GGGG":
      default:
        return localize2.era(era, { width: "wide" });
    }
  },
  // Year
  y: function(date, token, localize2) {
    if (token === "yo") {
      const signedYear = date.getFullYear();
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize2.ordinalNumber(year, { unit: "year" });
    }
    return lightFormatters.y(date, token);
  },
  // Local week-numbering year
  Y: function(date, token, localize2, options) {
    const signedWeekYear = getWeekYear(date, options);
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize2.ordinalNumber(weekYear, { unit: "year" });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function(date, token) {
    const isoWeekYear = getISOWeekYear(date);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(date, token) {
    const year = date.getFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function(date, token, localize2) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      case "Q":
        return String(quarter);
      case "QQ":
        return addLeadingZeros(quarter, 2);
      case "Qo":
        return localize2.ordinalNumber(quarter, { unit: "quarter" });
      case "QQQ":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(date, token, localize2) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      case "q":
        return String(quarter);
      case "qq":
        return addLeadingZeros(quarter, 2);
      case "qo":
        return localize2.ordinalNumber(quarter, { unit: "quarter" });
      case "qqq":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(date, token, localize2) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters.M(date, token);
      case "Mo":
        return localize2.ordinalNumber(month + 1, { unit: "month" });
      case "MMM":
        return localize2.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return localize2.month(month, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return localize2.month(month, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(date, token, localize2) {
    const month = date.getMonth();
    switch (token) {
      case "L":
        return String(month + 1);
      case "LL":
        return addLeadingZeros(month + 1, 2);
      case "Lo":
        return localize2.ordinalNumber(month + 1, { unit: "month" });
      case "LLL":
        return localize2.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return localize2.month(month, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return localize2.month(month, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(date, token, localize2, options) {
    const week = getWeek(date, options);
    if (token === "wo") {
      return localize2.ordinalNumber(week, { unit: "week" });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function(date, token, localize2) {
    const isoWeek = getISOWeek(date);
    if (token === "Io") {
      return localize2.ordinalNumber(isoWeek, { unit: "week" });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function(date, token, localize2) {
    if (token === "do") {
      return localize2.ordinalNumber(date.getDate(), { unit: "date" });
    }
    return lightFormatters.d(date, token);
  },
  // Day of year
  D: function(date, token, localize2) {
    const dayOfYear = getDayOfYear(date);
    if (token === "Do") {
      return localize2.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function(date, token, localize2) {
    const dayOfWeek = date.getDay();
    switch (token) {
      case "E":
      case "EE":
      case "EEE":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(date, token, localize2, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "e":
        return String(localDayOfWeek);
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      case "eo":
        return localize2.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(date, token, localize2, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "c":
        return String(localDayOfWeek);
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      case "co":
        return localize2.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(date, token, localize2) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      case "i":
        return String(isoDayOfWeek);
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      case "io":
        return localize2.ordinalNumber(isoDayOfWeek, { unit: "day" });
      case "iii":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(date, token, localize2) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(date, token, localize2) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(date, token, localize2) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(date, token, localize2) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0)
        hours = 12;
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return lightFormatters.h(date, token);
  },
  // Hour [0-23]
  H: function(date, token, localize2) {
    if (token === "Ho") {
      return localize2.ordinalNumber(date.getHours(), { unit: "hour" });
    }
    return lightFormatters.H(date, token);
  },
  // Hour [0-11]
  K: function(date, token, localize2) {
    const hours = date.getHours() % 12;
    if (token === "Ko") {
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function(date, token, localize2) {
    let hours = date.getHours();
    if (hours === 0)
      hours = 24;
    if (token === "ko") {
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function(date, token, localize2) {
    if (token === "mo") {
      return localize2.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }
    return lightFormatters.m(date, token);
  },
  // Second
  s: function(date, token, localize2) {
    if (token === "so") {
      return localize2.ordinalNumber(date.getSeconds(), { unit: "second" });
    }
    return lightFormatters.s(date, token);
  },
  // Fraction of second
  S: function(date, token) {
    return lightFormatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      case "XXXXX":
      case "XXX":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      case "xxxxx":
      case "xxx":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function(date, token, _localize) {
    const timestamp = Math.trunc(+date / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function(date, token, _localize) {
    return addLeadingZeros(+date, token.length);
  }
};
function formatTimezoneShort(offset, delimiter4 = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter4 + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter4) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter4);
}
function formatTimezone(offset, delimiter4 = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = addLeadingZeros(Math.trunc(absOffset / 60), 2);
  const minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter4 + minutes;
}

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/_lib/format/longFormatters.js
var dateLongFormatter = (pattern, formatLong2) => {
  switch (pattern) {
    case "P":
      return formatLong2.date({ width: "short" });
    case "PP":
      return formatLong2.date({ width: "medium" });
    case "PPP":
      return formatLong2.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong2.date({ width: "full" });
  }
};
var timeLongFormatter = (pattern, formatLong2) => {
  switch (pattern) {
    case "p":
      return formatLong2.time({ width: "short" });
    case "pp":
      return formatLong2.time({ width: "medium" });
    case "ppp":
      return formatLong2.time({ width: "long" });
    case "pppp":
    default:
      return formatLong2.time({ width: "full" });
  }
};
var dateTimeLongFormatter = (pattern, formatLong2) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong2);
  }
  let dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong2.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong2.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong2.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong2.dateTime({ width: "full" });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/_lib/protectedTokens.js
var dayOfYearTokenRE = /^D+$/;
var weekYearTokenRE = /^Y+$/;
var throwTokens = ["D", "DD", "YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format6, input) {
  const _message = message(token, format6, input);
  console.warn(_message);
  if (throwTokens.includes(token))
    throw new RangeError(_message);
}
function message(token, format6, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format6}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/date-fns@4.1.0/node_modules/date-fns/format.js
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format2(date, formatStr, options) {
  const defaultOptions2 = getDefaultOptions();
  const locale = options?.locale ?? defaultOptions2.locale ?? enUS;
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const originalDate = toDate(date, options?.in);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  let parts = formatStr.match(longFormattingTokensRegExp).map((substring) => {
    const firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      const longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map((substring) => {
    if (substring === "''") {
      return { isToken: false, value: "'" };
    }
    const firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return { isToken: false, value: cleanEscapedString(substring) };
    }
    if (formatters[firstCharacter]) {
      return { isToken: true, value: substring };
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + firstCharacter + "`"
      );
    }
    return { isToken: false, value: substring };
  });
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }
  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };
  return parts.map((part) => {
    if (!part.isToken)
      return part.value;
    const token = part.value;
    if (!options?.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token) || !options?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
      warnOrThrowProtectedError(token, formatStr, String(date));
    }
    const formatter = formatters[token[0]];
    return formatter(originalDate, token, locale.localize, formatterOptions);
  }).join("");
}
function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

// https://deno.land/std@0.196.0/fmt/colors.ts
var { Deno: Deno3 } = globalThis;
var noColor2 = typeof Deno3?.noColor === "boolean" ? Deno3.noColor : false;
var enabled2 = !noColor2;
function code2(open, close) {
  return {
    open: `\x1B[${open.join(";")}m`,
    close: `\x1B[${close}m`,
    regexp: new RegExp(`\\x1b\\[${close}m`, "g")
  };
}
function run2(str, code3) {
  return enabled2 ? `${code3.open}${str.replace(code3.regexp, code3.open)}${code3.close}` : str;
}
function bold2(str) {
  return run2(str, code2([1], 22));
}
function dim2(str) {
  return run2(str, code2([2], 22));
}
function italic2(str) {
  return run2(str, code2([3], 23));
}
function underline2(str) {
  return run2(str, code2([4], 24));
}
function red2(str) {
  return run2(str, code2([31], 39));
}
function green2(str) {
  return run2(str, code2([32], 39));
}
function yellow2(str) {
  return run2(str, code2([33], 39));
}
function brightBlue2(str) {
  return run2(str, code2([94], 39));
}
var ANSI_PATTERN2 = new RegExp(
  [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"
  ].join("|"),
  "g"
);
function stripColor2(string2) {
  return string2.replace(ANSI_PATTERN2, "");
}

// https://deno.land/std@0.196.0/_util/os.ts
var osType = (() => {
  const { Deno: Deno4 } = globalThis;
  if (typeof Deno4?.build?.os === "string") {
    return Deno4.build.os;
  }
  const { navigator: navigator2 } = globalThis;
  if (navigator2?.appVersion?.includes?.("Win")) {
    return "windows";
  }
  return "linux";
})();
var isWindows = osType === "windows";

// https://deno.land/std@0.196.0/path/win32.ts
var win32_exports = {};
__export(win32_exports, {
  basename: () => basename,
  delimiter: () => delimiter,
  dirname: () => dirname,
  extname: () => extname,
  format: () => format3,
  fromFileUrl: () => fromFileUrl,
  isAbsolute: () => isAbsolute,
  join: () => join,
  normalize: () => normalize,
  parse: () => parse,
  relative: () => relative,
  resolve: () => resolve,
  sep: () => sep,
  toFileUrl: () => toFileUrl,
  toNamespacedPath: () => toNamespacedPath
});

// https://deno.land/std@0.196.0/path/_constants.ts
var CHAR_UPPERCASE_A = 65;
var CHAR_LOWERCASE_A = 97;
var CHAR_UPPERCASE_Z = 90;
var CHAR_LOWERCASE_Z = 122;
var CHAR_DOT = 46;
var CHAR_FORWARD_SLASH = 47;
var CHAR_BACKWARD_SLASH = 92;
var CHAR_COLON = 58;
var CHAR_QUESTION_MARK = 63;

// https://deno.land/std@0.196.0/path/_util.ts
function assertPath(path3) {
  if (typeof path3 !== "string") {
    throw new TypeError(
      `Path must be a string. Received ${JSON.stringify(path3)}`
    );
  }
}
function isPosixPathSeparator(code3) {
  return code3 === CHAR_FORWARD_SLASH;
}
function isPathSeparator(code3) {
  return isPosixPathSeparator(code3) || code3 === CHAR_BACKWARD_SLASH;
}
function isWindowsDeviceRoot(code3) {
  return code3 >= CHAR_LOWERCASE_A && code3 <= CHAR_LOWERCASE_Z || code3 >= CHAR_UPPERCASE_A && code3 <= CHAR_UPPERCASE_Z;
}
function normalizeString(path3, allowAboveRoot, separator, isPathSeparator2) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let code3;
  for (let i = 0, len = path3.length; i <= len; ++i) {
    if (i < len)
      code3 = path3.charCodeAt(i);
    else if (isPathSeparator2(code3))
      break;
    else
      code3 = CHAR_FORWARD_SLASH;
    if (isPathSeparator2(code3)) {
      if (lastSlash === i - 1 || dots === 1) {
      } else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== CHAR_DOT || res.charCodeAt(res.length - 2) !== CHAR_DOT) {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf(separator);
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
            }
            lastSlash = i;
            dots = 0;
            continue;
          } else if (res.length === 2 || res.length === 1) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += `${separator}..`;
          else
            res = "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += separator + path3.slice(lastSlash + 1, i);
        else
          res = path3.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code3 === CHAR_DOT && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
function _format(sep4, pathObject) {
  const dir = pathObject.dir || pathObject.root;
  const base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
  if (!dir)
    return base;
  if (base === sep4)
    return dir;
  if (dir === pathObject.root)
    return dir + base;
  return dir + sep4 + base;
}
var WHITESPACE_ENCODINGS = {
  "	": "%09",
  "\n": "%0A",
  "\v": "%0B",
  "\f": "%0C",
  "\r": "%0D",
  " ": "%20"
};
function encodeWhitespace(string2) {
  return string2.replaceAll(/[\s]/g, (c) => {
    return WHITESPACE_ENCODINGS[c] ?? c;
  });
}
function lastPathSegment(path3, isSep, start = 0) {
  let matchedNonSeparator = false;
  let end = path3.length;
  for (let i = path3.length - 1; i >= start; --i) {
    if (isSep(path3.charCodeAt(i))) {
      if (matchedNonSeparator) {
        start = i + 1;
        break;
      }
    } else if (!matchedNonSeparator) {
      matchedNonSeparator = true;
      end = i + 1;
    }
  }
  return path3.slice(start, end);
}
function stripTrailingSeparators(segment, isSep) {
  if (segment.length <= 1) {
    return segment;
  }
  let end = segment.length;
  for (let i = segment.length - 1; i > 0; i--) {
    if (isSep(segment.charCodeAt(i))) {
      end = i;
    } else {
      break;
    }
  }
  return segment.slice(0, end);
}
function stripSuffix(name, suffix) {
  if (suffix.length >= name.length) {
    return name;
  }
  const lenDiff = name.length - suffix.length;
  for (let i = suffix.length - 1; i >= 0; --i) {
    if (name.charCodeAt(lenDiff + i) !== suffix.charCodeAt(i)) {
      return name;
    }
  }
  return name.slice(0, -suffix.length);
}

// https://deno.land/std@0.196.0/assert/assertion_error.ts
var AssertionError = class extends Error {
  name = "AssertionError";
  constructor(message2) {
    super(message2);
  }
};

// https://deno.land/std@0.196.0/assert/assert.ts
function assert(expr, msg = "") {
  if (!expr) {
    throw new AssertionError(msg);
  }
}

// https://deno.land/std@0.196.0/path/win32.ts
var sep = "\\";
var delimiter = ";";
function resolve(...pathSegments) {
  let resolvedDevice = "";
  let resolvedTail = "";
  let resolvedAbsolute = false;
  for (let i = pathSegments.length - 1; i >= -1; i--) {
    let path3;
    const { Deno: Deno4 } = globalThis;
    if (i >= 0) {
      path3 = pathSegments[i];
    } else if (!resolvedDevice) {
      if (typeof Deno4?.cwd !== "function") {
        throw new TypeError("Resolved a drive-letter-less path without a CWD.");
      }
      path3 = Deno4.cwd();
    } else {
      if (typeof Deno4?.env?.get !== "function" || typeof Deno4?.cwd !== "function") {
        throw new TypeError("Resolved a relative path without a CWD.");
      }
      path3 = Deno4.cwd();
      if (path3 === void 0 || path3.slice(0, 3).toLowerCase() !== `${resolvedDevice.toLowerCase()}\\`) {
        path3 = `${resolvedDevice}\\`;
      }
    }
    assertPath(path3);
    const len = path3.length;
    if (len === 0)
      continue;
    let rootEnd = 0;
    let device = "";
    let isAbsolute4 = false;
    const code3 = path3.charCodeAt(0);
    if (len > 1) {
      if (isPathSeparator(code3)) {
        isAbsolute4 = true;
        if (isPathSeparator(path3.charCodeAt(1))) {
          let j = 2;
          let last = j;
          for (; j < len; ++j) {
            if (isPathSeparator(path3.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last) {
            const firstPart = path3.slice(last, j);
            last = j;
            for (; j < len; ++j) {
              if (!isPathSeparator(path3.charCodeAt(j)))
                break;
            }
            if (j < len && j !== last) {
              last = j;
              for (; j < len; ++j) {
                if (isPathSeparator(path3.charCodeAt(j)))
                  break;
              }
              if (j === len) {
                device = `\\\\${firstPart}\\${path3.slice(last)}`;
                rootEnd = j;
              } else if (j !== last) {
                device = `\\\\${firstPart}\\${path3.slice(last, j)}`;
                rootEnd = j;
              }
            }
          }
        } else {
          rootEnd = 1;
        }
      } else if (isWindowsDeviceRoot(code3)) {
        if (path3.charCodeAt(1) === CHAR_COLON) {
          device = path3.slice(0, 2);
          rootEnd = 2;
          if (len > 2) {
            if (isPathSeparator(path3.charCodeAt(2))) {
              isAbsolute4 = true;
              rootEnd = 3;
            }
          }
        }
      }
    } else if (isPathSeparator(code3)) {
      rootEnd = 1;
      isAbsolute4 = true;
    }
    if (device.length > 0 && resolvedDevice.length > 0 && device.toLowerCase() !== resolvedDevice.toLowerCase()) {
      continue;
    }
    if (resolvedDevice.length === 0 && device.length > 0) {
      resolvedDevice = device;
    }
    if (!resolvedAbsolute) {
      resolvedTail = `${path3.slice(rootEnd)}\\${resolvedTail}`;
      resolvedAbsolute = isAbsolute4;
    }
    if (resolvedAbsolute && resolvedDevice.length > 0)
      break;
  }
  resolvedTail = normalizeString(
    resolvedTail,
    !resolvedAbsolute,
    "\\",
    isPathSeparator
  );
  return resolvedDevice + (resolvedAbsolute ? "\\" : "") + resolvedTail || ".";
}
function normalize(path3) {
  assertPath(path3);
  const len = path3.length;
  if (len === 0)
    return ".";
  let rootEnd = 0;
  let device;
  let isAbsolute4 = false;
  const code3 = path3.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator(code3)) {
      isAbsolute4 = true;
      if (isPathSeparator(path3.charCodeAt(1))) {
        let j = 2;
        let last = j;
        for (; j < len; ++j) {
          if (isPathSeparator(path3.charCodeAt(j)))
            break;
        }
        if (j < len && j !== last) {
          const firstPart = path3.slice(last, j);
          last = j;
          for (; j < len; ++j) {
            if (!isPathSeparator(path3.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last) {
            last = j;
            for (; j < len; ++j) {
              if (isPathSeparator(path3.charCodeAt(j)))
                break;
            }
            if (j === len) {
              return `\\\\${firstPart}\\${path3.slice(last)}\\`;
            } else if (j !== last) {
              device = `\\\\${firstPart}\\${path3.slice(last, j)}`;
              rootEnd = j;
            }
          }
        }
      } else {
        rootEnd = 1;
      }
    } else if (isWindowsDeviceRoot(code3)) {
      if (path3.charCodeAt(1) === CHAR_COLON) {
        device = path3.slice(0, 2);
        rootEnd = 2;
        if (len > 2) {
          if (isPathSeparator(path3.charCodeAt(2))) {
            isAbsolute4 = true;
            rootEnd = 3;
          }
        }
      }
    }
  } else if (isPathSeparator(code3)) {
    return "\\";
  }
  let tail;
  if (rootEnd < len) {
    tail = normalizeString(
      path3.slice(rootEnd),
      !isAbsolute4,
      "\\",
      isPathSeparator
    );
  } else {
    tail = "";
  }
  if (tail.length === 0 && !isAbsolute4)
    tail = ".";
  if (tail.length > 0 && isPathSeparator(path3.charCodeAt(len - 1))) {
    tail += "\\";
  }
  if (device === void 0) {
    if (isAbsolute4) {
      if (tail.length > 0)
        return `\\${tail}`;
      else
        return "\\";
    } else if (tail.length > 0) {
      return tail;
    } else {
      return "";
    }
  } else if (isAbsolute4) {
    if (tail.length > 0)
      return `${device}\\${tail}`;
    else
      return `${device}\\`;
  } else if (tail.length > 0) {
    return device + tail;
  } else {
    return device;
  }
}
function isAbsolute(path3) {
  assertPath(path3);
  const len = path3.length;
  if (len === 0)
    return false;
  const code3 = path3.charCodeAt(0);
  if (isPathSeparator(code3)) {
    return true;
  } else if (isWindowsDeviceRoot(code3)) {
    if (len > 2 && path3.charCodeAt(1) === CHAR_COLON) {
      if (isPathSeparator(path3.charCodeAt(2)))
        return true;
    }
  }
  return false;
}
function join(...paths) {
  const pathsCount = paths.length;
  if (pathsCount === 0)
    return ".";
  let joined;
  let firstPart = null;
  for (let i = 0; i < pathsCount; ++i) {
    const path3 = paths[i];
    assertPath(path3);
    if (path3.length > 0) {
      if (joined === void 0)
        joined = firstPart = path3;
      else
        joined += `\\${path3}`;
    }
  }
  if (joined === void 0)
    return ".";
  let needsReplace = true;
  let slashCount = 0;
  assert(firstPart != null);
  if (isPathSeparator(firstPart.charCodeAt(0))) {
    ++slashCount;
    const firstLen = firstPart.length;
    if (firstLen > 1) {
      if (isPathSeparator(firstPart.charCodeAt(1))) {
        ++slashCount;
        if (firstLen > 2) {
          if (isPathSeparator(firstPart.charCodeAt(2)))
            ++slashCount;
          else {
            needsReplace = false;
          }
        }
      }
    }
  }
  if (needsReplace) {
    for (; slashCount < joined.length; ++slashCount) {
      if (!isPathSeparator(joined.charCodeAt(slashCount)))
        break;
    }
    if (slashCount >= 2)
      joined = `\\${joined.slice(slashCount)}`;
  }
  return normalize(joined);
}
function relative(from, to) {
  assertPath(from);
  assertPath(to);
  if (from === to)
    return "";
  const fromOrig = resolve(from);
  const toOrig = resolve(to);
  if (fromOrig === toOrig)
    return "";
  from = fromOrig.toLowerCase();
  to = toOrig.toLowerCase();
  if (from === to)
    return "";
  let fromStart = 0;
  let fromEnd = from.length;
  for (; fromStart < fromEnd; ++fromStart) {
    if (from.charCodeAt(fromStart) !== CHAR_BACKWARD_SLASH)
      break;
  }
  for (; fromEnd - 1 > fromStart; --fromEnd) {
    if (from.charCodeAt(fromEnd - 1) !== CHAR_BACKWARD_SLASH)
      break;
  }
  const fromLen = fromEnd - fromStart;
  let toStart = 0;
  let toEnd = to.length;
  for (; toStart < toEnd; ++toStart) {
    if (to.charCodeAt(toStart) !== CHAR_BACKWARD_SLASH)
      break;
  }
  for (; toEnd - 1 > toStart; --toEnd) {
    if (to.charCodeAt(toEnd - 1) !== CHAR_BACKWARD_SLASH)
      break;
  }
  const toLen = toEnd - toStart;
  const length = fromLen < toLen ? fromLen : toLen;
  let lastCommonSep = -1;
  let i = 0;
  for (; i <= length; ++i) {
    if (i === length) {
      if (toLen > length) {
        if (to.charCodeAt(toStart + i) === CHAR_BACKWARD_SLASH) {
          return toOrig.slice(toStart + i + 1);
        } else if (i === 2) {
          return toOrig.slice(toStart + i);
        }
      }
      if (fromLen > length) {
        if (from.charCodeAt(fromStart + i) === CHAR_BACKWARD_SLASH) {
          lastCommonSep = i;
        } else if (i === 2) {
          lastCommonSep = 3;
        }
      }
      break;
    }
    const fromCode = from.charCodeAt(fromStart + i);
    const toCode = to.charCodeAt(toStart + i);
    if (fromCode !== toCode)
      break;
    else if (fromCode === CHAR_BACKWARD_SLASH)
      lastCommonSep = i;
  }
  if (i !== length && lastCommonSep === -1) {
    return toOrig;
  }
  let out = "";
  if (lastCommonSep === -1)
    lastCommonSep = 0;
  for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
    if (i === fromEnd || from.charCodeAt(i) === CHAR_BACKWARD_SLASH) {
      if (out.length === 0)
        out += "..";
      else
        out += "\\..";
    }
  }
  if (out.length > 0) {
    return out + toOrig.slice(toStart + lastCommonSep, toEnd);
  } else {
    toStart += lastCommonSep;
    if (toOrig.charCodeAt(toStart) === CHAR_BACKWARD_SLASH)
      ++toStart;
    return toOrig.slice(toStart, toEnd);
  }
}
function toNamespacedPath(path3) {
  if (typeof path3 !== "string")
    return path3;
  if (path3.length === 0)
    return "";
  const resolvedPath = resolve(path3);
  if (resolvedPath.length >= 3) {
    if (resolvedPath.charCodeAt(0) === CHAR_BACKWARD_SLASH) {
      if (resolvedPath.charCodeAt(1) === CHAR_BACKWARD_SLASH) {
        const code3 = resolvedPath.charCodeAt(2);
        if (code3 !== CHAR_QUESTION_MARK && code3 !== CHAR_DOT) {
          return `\\\\?\\UNC\\${resolvedPath.slice(2)}`;
        }
      }
    } else if (isWindowsDeviceRoot(resolvedPath.charCodeAt(0))) {
      if (resolvedPath.charCodeAt(1) === CHAR_COLON && resolvedPath.charCodeAt(2) === CHAR_BACKWARD_SLASH) {
        return `\\\\?\\${resolvedPath}`;
      }
    }
  }
  return path3;
}
function dirname(path3) {
  assertPath(path3);
  const len = path3.length;
  if (len === 0)
    return ".";
  let rootEnd = -1;
  let end = -1;
  let matchedSlash = true;
  let offset = 0;
  const code3 = path3.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator(code3)) {
      rootEnd = offset = 1;
      if (isPathSeparator(path3.charCodeAt(1))) {
        let j = 2;
        let last = j;
        for (; j < len; ++j) {
          if (isPathSeparator(path3.charCodeAt(j)))
            break;
        }
        if (j < len && j !== last) {
          last = j;
          for (; j < len; ++j) {
            if (!isPathSeparator(path3.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last) {
            last = j;
            for (; j < len; ++j) {
              if (isPathSeparator(path3.charCodeAt(j)))
                break;
            }
            if (j === len) {
              return path3;
            }
            if (j !== last) {
              rootEnd = offset = j + 1;
            }
          }
        }
      }
    } else if (isWindowsDeviceRoot(code3)) {
      if (path3.charCodeAt(1) === CHAR_COLON) {
        rootEnd = offset = 2;
        if (len > 2) {
          if (isPathSeparator(path3.charCodeAt(2)))
            rootEnd = offset = 3;
        }
      }
    }
  } else if (isPathSeparator(code3)) {
    return path3;
  }
  for (let i = len - 1; i >= offset; --i) {
    if (isPathSeparator(path3.charCodeAt(i))) {
      if (!matchedSlash) {
        end = i;
        break;
      }
    } else {
      matchedSlash = false;
    }
  }
  if (end === -1) {
    if (rootEnd === -1)
      return ".";
    else
      end = rootEnd;
  }
  return stripTrailingSeparators(path3.slice(0, end), isPosixPathSeparator);
}
function basename(path3, suffix = "") {
  assertPath(path3);
  if (path3.length === 0)
    return path3;
  if (typeof suffix !== "string") {
    throw new TypeError(
      `Suffix must be a string. Received ${JSON.stringify(suffix)}`
    );
  }
  let start = 0;
  if (path3.length >= 2) {
    const drive = path3.charCodeAt(0);
    if (isWindowsDeviceRoot(drive)) {
      if (path3.charCodeAt(1) === CHAR_COLON)
        start = 2;
    }
  }
  const lastSegment = lastPathSegment(path3, isPathSeparator, start);
  const strippedSegment = stripTrailingSeparators(lastSegment, isPathSeparator);
  return suffix ? stripSuffix(strippedSegment, suffix) : strippedSegment;
}
function extname(path3) {
  assertPath(path3);
  let start = 0;
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let preDotState = 0;
  if (path3.length >= 2 && path3.charCodeAt(1) === CHAR_COLON && isWindowsDeviceRoot(path3.charCodeAt(0))) {
    start = startPart = 2;
  }
  for (let i = path3.length - 1; i >= start; --i) {
    const code3 = path3.charCodeAt(i);
    if (isPathSeparator(code3)) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code3 === CHAR_DOT) {
      if (startDot === -1)
        startDot = i;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path3.slice(startDot, end);
}
function format3(pathObject) {
  if (pathObject === null || typeof pathObject !== "object") {
    throw new TypeError(
      `The "pathObject" argument must be of type Object. Received type ${typeof pathObject}`
    );
  }
  return _format("\\", pathObject);
}
function parse(path3) {
  assertPath(path3);
  const ret = { root: "", dir: "", base: "", ext: "", name: "" };
  const len = path3.length;
  if (len === 0)
    return ret;
  let rootEnd = 0;
  let code3 = path3.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator(code3)) {
      rootEnd = 1;
      if (isPathSeparator(path3.charCodeAt(1))) {
        let j = 2;
        let last = j;
        for (; j < len; ++j) {
          if (isPathSeparator(path3.charCodeAt(j)))
            break;
        }
        if (j < len && j !== last) {
          last = j;
          for (; j < len; ++j) {
            if (!isPathSeparator(path3.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last) {
            last = j;
            for (; j < len; ++j) {
              if (isPathSeparator(path3.charCodeAt(j)))
                break;
            }
            if (j === len) {
              rootEnd = j;
            } else if (j !== last) {
              rootEnd = j + 1;
            }
          }
        }
      }
    } else if (isWindowsDeviceRoot(code3)) {
      if (path3.charCodeAt(1) === CHAR_COLON) {
        rootEnd = 2;
        if (len > 2) {
          if (isPathSeparator(path3.charCodeAt(2))) {
            if (len === 3) {
              ret.root = ret.dir = path3;
              ret.base = "\\";
              return ret;
            }
            rootEnd = 3;
          }
        } else {
          ret.root = ret.dir = path3;
          return ret;
        }
      }
    }
  } else if (isPathSeparator(code3)) {
    ret.root = ret.dir = path3;
    ret.base = "\\";
    return ret;
  }
  if (rootEnd > 0)
    ret.root = path3.slice(0, rootEnd);
  let startDot = -1;
  let startPart = rootEnd;
  let end = -1;
  let matchedSlash = true;
  let i = path3.length - 1;
  let preDotState = 0;
  for (; i >= rootEnd; --i) {
    code3 = path3.charCodeAt(i);
    if (isPathSeparator(code3)) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code3 === CHAR_DOT) {
      if (startDot === -1)
        startDot = i;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    if (end !== -1) {
      ret.base = ret.name = path3.slice(startPart, end);
    }
  } else {
    ret.name = path3.slice(startPart, startDot);
    ret.base = path3.slice(startPart, end);
    ret.ext = path3.slice(startDot, end);
  }
  ret.base = ret.base || "\\";
  if (startPart > 0 && startPart !== rootEnd) {
    ret.dir = path3.slice(0, startPart - 1);
  } else
    ret.dir = ret.root;
  return ret;
}
function fromFileUrl(url) {
  url = url instanceof URL ? url : new URL(url);
  if (url.protocol != "file:") {
    throw new TypeError("Must be a file URL.");
  }
  let path3 = decodeURIComponent(
    url.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25")
  ).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\");
  if (url.hostname != "") {
    path3 = `\\\\${url.hostname}${path3}`;
  }
  return path3;
}
function toFileUrl(path3) {
  if (!isAbsolute(path3)) {
    throw new TypeError("Must be an absolute path.");
  }
  const [, hostname, pathname] = path3.match(
    /^(?:[/\\]{2}([^/\\]+)(?=[/\\](?:[^/\\]|$)))?(.*)/
  );
  const url = new URL("file:///");
  url.pathname = encodeWhitespace(pathname.replace(/%/g, "%25"));
  if (hostname != null && hostname != "localhost") {
    url.hostname = hostname;
    if (!url.hostname) {
      throw new TypeError("Invalid hostname.");
    }
  }
  return url;
}

// https://deno.land/std@0.196.0/path/posix.ts
var posix_exports = {};
__export(posix_exports, {
  basename: () => basename2,
  delimiter: () => delimiter2,
  dirname: () => dirname2,
  extname: () => extname2,
  format: () => format4,
  fromFileUrl: () => fromFileUrl2,
  isAbsolute: () => isAbsolute2,
  join: () => join2,
  normalize: () => normalize2,
  parse: () => parse2,
  relative: () => relative2,
  resolve: () => resolve2,
  sep: () => sep2,
  toFileUrl: () => toFileUrl2,
  toNamespacedPath: () => toNamespacedPath2
});
var sep2 = "/";
var delimiter2 = ":";
function resolve2(...pathSegments) {
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let i = pathSegments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    let path3;
    if (i >= 0)
      path3 = pathSegments[i];
    else {
      const { Deno: Deno4 } = globalThis;
      if (typeof Deno4?.cwd !== "function") {
        throw new TypeError("Resolved a relative path without a CWD.");
      }
      path3 = Deno4.cwd();
    }
    assertPath(path3);
    if (path3.length === 0) {
      continue;
    }
    resolvedPath = `${path3}/${resolvedPath}`;
    resolvedAbsolute = isPosixPathSeparator(path3.charCodeAt(0));
  }
  resolvedPath = normalizeString(
    resolvedPath,
    !resolvedAbsolute,
    "/",
    isPosixPathSeparator
  );
  if (resolvedAbsolute) {
    if (resolvedPath.length > 0)
      return `/${resolvedPath}`;
    else
      return "/";
  } else if (resolvedPath.length > 0)
    return resolvedPath;
  else
    return ".";
}
function normalize2(path3) {
  assertPath(path3);
  if (path3.length === 0)
    return ".";
  const isAbsolute4 = isPosixPathSeparator(path3.charCodeAt(0));
  const trailingSeparator = isPosixPathSeparator(
    path3.charCodeAt(path3.length - 1)
  );
  path3 = normalizeString(path3, !isAbsolute4, "/", isPosixPathSeparator);
  if (path3.length === 0 && !isAbsolute4)
    path3 = ".";
  if (path3.length > 0 && trailingSeparator)
    path3 += "/";
  if (isAbsolute4)
    return `/${path3}`;
  return path3;
}
function isAbsolute2(path3) {
  assertPath(path3);
  return path3.length > 0 && isPosixPathSeparator(path3.charCodeAt(0));
}
function join2(...paths) {
  if (paths.length === 0)
    return ".";
  let joined;
  for (let i = 0, len = paths.length; i < len; ++i) {
    const path3 = paths[i];
    assertPath(path3);
    if (path3.length > 0) {
      if (!joined)
        joined = path3;
      else
        joined += `/${path3}`;
    }
  }
  if (!joined)
    return ".";
  return normalize2(joined);
}
function relative2(from, to) {
  assertPath(from);
  assertPath(to);
  if (from === to)
    return "";
  from = resolve2(from);
  to = resolve2(to);
  if (from === to)
    return "";
  let fromStart = 1;
  const fromEnd = from.length;
  for (; fromStart < fromEnd; ++fromStart) {
    if (!isPosixPathSeparator(from.charCodeAt(fromStart)))
      break;
  }
  const fromLen = fromEnd - fromStart;
  let toStart = 1;
  const toEnd = to.length;
  for (; toStart < toEnd; ++toStart) {
    if (!isPosixPathSeparator(to.charCodeAt(toStart)))
      break;
  }
  const toLen = toEnd - toStart;
  const length = fromLen < toLen ? fromLen : toLen;
  let lastCommonSep = -1;
  let i = 0;
  for (; i <= length; ++i) {
    if (i === length) {
      if (toLen > length) {
        if (isPosixPathSeparator(to.charCodeAt(toStart + i))) {
          return to.slice(toStart + i + 1);
        } else if (i === 0) {
          return to.slice(toStart + i);
        }
      } else if (fromLen > length) {
        if (isPosixPathSeparator(from.charCodeAt(fromStart + i))) {
          lastCommonSep = i;
        } else if (i === 0) {
          lastCommonSep = 0;
        }
      }
      break;
    }
    const fromCode = from.charCodeAt(fromStart + i);
    const toCode = to.charCodeAt(toStart + i);
    if (fromCode !== toCode)
      break;
    else if (isPosixPathSeparator(fromCode))
      lastCommonSep = i;
  }
  let out = "";
  for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
    if (i === fromEnd || isPosixPathSeparator(from.charCodeAt(i))) {
      if (out.length === 0)
        out += "..";
      else
        out += "/..";
    }
  }
  if (out.length > 0)
    return out + to.slice(toStart + lastCommonSep);
  else {
    toStart += lastCommonSep;
    if (isPosixPathSeparator(to.charCodeAt(toStart)))
      ++toStart;
    return to.slice(toStart);
  }
}
function toNamespacedPath2(path3) {
  return path3;
}
function dirname2(path3) {
  if (path3.length === 0)
    return ".";
  let end = -1;
  let matchedNonSeparator = false;
  for (let i = path3.length - 1; i >= 1; --i) {
    if (isPosixPathSeparator(path3.charCodeAt(i))) {
      if (matchedNonSeparator) {
        end = i;
        break;
      }
    } else {
      matchedNonSeparator = true;
    }
  }
  if (end === -1) {
    return isPosixPathSeparator(path3.charCodeAt(0)) ? "/" : ".";
  }
  return stripTrailingSeparators(
    path3.slice(0, end),
    isPosixPathSeparator
  );
}
function basename2(path3, suffix = "") {
  assertPath(path3);
  if (path3.length === 0)
    return path3;
  if (typeof suffix !== "string") {
    throw new TypeError(
      `Suffix must be a string. Received ${JSON.stringify(suffix)}`
    );
  }
  const lastSegment = lastPathSegment(path3, isPosixPathSeparator);
  const strippedSegment = stripTrailingSeparators(
    lastSegment,
    isPosixPathSeparator
  );
  return suffix ? stripSuffix(strippedSegment, suffix) : strippedSegment;
}
function extname2(path3) {
  assertPath(path3);
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let preDotState = 0;
  for (let i = path3.length - 1; i >= 0; --i) {
    const code3 = path3.charCodeAt(i);
    if (isPosixPathSeparator(code3)) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code3 === CHAR_DOT) {
      if (startDot === -1)
        startDot = i;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path3.slice(startDot, end);
}
function format4(pathObject) {
  if (pathObject === null || typeof pathObject !== "object") {
    throw new TypeError(
      `The "pathObject" argument must be of type Object. Received type ${typeof pathObject}`
    );
  }
  return _format("/", pathObject);
}
function parse2(path3) {
  assertPath(path3);
  const ret = { root: "", dir: "", base: "", ext: "", name: "" };
  if (path3.length === 0)
    return ret;
  const isAbsolute4 = isPosixPathSeparator(path3.charCodeAt(0));
  let start;
  if (isAbsolute4) {
    ret.root = "/";
    start = 1;
  } else {
    start = 0;
  }
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let i = path3.length - 1;
  let preDotState = 0;
  for (; i >= start; --i) {
    const code3 = path3.charCodeAt(i);
    if (isPosixPathSeparator(code3)) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code3 === CHAR_DOT) {
      if (startDot === -1)
        startDot = i;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    if (end !== -1) {
      if (startPart === 0 && isAbsolute4) {
        ret.base = ret.name = path3.slice(1, end);
      } else {
        ret.base = ret.name = path3.slice(startPart, end);
      }
    }
    ret.base = ret.base || "/";
  } else {
    if (startPart === 0 && isAbsolute4) {
      ret.name = path3.slice(1, startDot);
      ret.base = path3.slice(1, end);
    } else {
      ret.name = path3.slice(startPart, startDot);
      ret.base = path3.slice(startPart, end);
    }
    ret.ext = path3.slice(startDot, end);
  }
  if (startPart > 0) {
    ret.dir = stripTrailingSeparators(
      path3.slice(0, startPart - 1),
      isPosixPathSeparator
    );
  } else if (isAbsolute4)
    ret.dir = "/";
  return ret;
}
function fromFileUrl2(url) {
  url = url instanceof URL ? url : new URL(url);
  if (url.protocol != "file:") {
    throw new TypeError("Must be a file URL.");
  }
  return decodeURIComponent(
    url.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25")
  );
}
function toFileUrl2(path3) {
  if (!isAbsolute2(path3)) {
    throw new TypeError("Must be an absolute path.");
  }
  const url = new URL("file:///");
  url.pathname = encodeWhitespace(
    path3.replace(/%/g, "%25").replace(/\\/g, "%5C")
  );
  return url;
}

// https://deno.land/std@0.196.0/path/glob.ts
var path = isWindows ? win32_exports : posix_exports;
var { join: join3, normalize: normalize3 } = path;

// https://deno.land/std@0.196.0/path/mod.ts
var path2 = isWindows ? win32_exports : posix_exports;
var {
  basename: basename3,
  delimiter: delimiter3,
  dirname: dirname3,
  extname: extname3,
  format: format5,
  fromFileUrl: fromFileUrl3,
  isAbsolute: isAbsolute3,
  join: join4,
  normalize: normalize4,
  parse: parse3,
  relative: relative3,
  resolve: resolve3,
  toFileUrl: toFileUrl3,
  toNamespacedPath: toNamespacedPath3
} = path2;

// https://deno.land/x/cliffy@v1.0.0-rc.3/prompt/_figures.ts
var main = {
  ARROW_UP: "\u2191",
  ARROW_DOWN: "\u2193",
  ARROW_LEFT: "\u2190",
  ARROW_RIGHT: "\u2192",
  ARROW_UP_LEFT: "\u2196",
  ARROW_UP_RIGHT: "\u2197",
  ARROW_DOWN_RIGHT: "\u2198",
  ARROW_DOWN_LEFT: "\u2199",
  RADIO_ON: "\u25C9",
  RADIO_OFF: "\u25EF",
  TICK: "\u2714",
  CROSS: "\u2718",
  ELLIPSIS: "\u2026",
  POINTER_SMALL: "\u203A",
  POINTER_SMALL_LEFT: "\u2039",
  LINE: "\u2500",
  POINTER: "\u276F",
  POINTER_LEFT: "\u276E",
  INFO: "\u2139",
  TAB_LEFT: "\u21E4",
  TAB_RIGHT: "\u21E5",
  ESCAPE: "\u238B",
  BACKSPACE: "\u232B",
  PAGE_UP: "\u21DE",
  PAGE_DOWN: "\u21DF",
  ENTER: "\u21B5",
  SEARCH: "\u{1F50E}",
  FOLDER: "\u{1F4C1}",
  FOLDER_OPEN: "\u{1F4C2}"
};
var win = {
  ...main,
  RADIO_ON: "(*)",
  RADIO_OFF: "( )",
  TICK: "\u221A",
  CROSS: "\xD7",
  POINTER_SMALL: "\xBB"
};
var Figures = Deno.build.os === "windows" ? win : main;
var keyMap = {
  up: "ARROW_UP",
  down: "ARROW_DOWN",
  left: "ARROW_LEFT",
  right: "ARROW_RIGHT",
  pageup: "PAGE_UP",
  pagedown: "PAGE_DOWN",
  tab: "TAB_RIGHT",
  enter: "ENTER",
  return: "ENTER"
};
function getFiguresByKeys(keys) {
  const figures = [];
  for (const key of keys) {
    const figure = Figures[keyMap[key]] ?? key;
    if (!figures.includes(figure)) {
      figures.push(figure);
    }
  }
  return figures;
}

// https://deno.land/x/cliffy@v1.0.0-rc.3/ansi/ansi_escapes.ts
var ansi_escapes_exports = {};
__export(ansi_escapes_exports, {
  bel: () => bel,
  clearScreen: () => clearScreen,
  clearTerminal: () => clearTerminal,
  cursorBackward: () => cursorBackward,
  cursorDown: () => cursorDown,
  cursorForward: () => cursorForward,
  cursorHide: () => cursorHide,
  cursorLeft: () => cursorLeft,
  cursorMove: () => cursorMove,
  cursorNextLine: () => cursorNextLine,
  cursorPosition: () => cursorPosition,
  cursorPrevLine: () => cursorPrevLine,
  cursorRestore: () => cursorRestore,
  cursorSave: () => cursorSave,
  cursorShow: () => cursorShow,
  cursorTo: () => cursorTo,
  cursorUp: () => cursorUp,
  eraseDown: () => eraseDown,
  eraseLine: () => eraseLine,
  eraseLineEnd: () => eraseLineEnd,
  eraseLineStart: () => eraseLineStart,
  eraseLines: () => eraseLines,
  eraseScreen: () => eraseScreen,
  eraseUp: () => eraseUp,
  image: () => image,
  link: () => link,
  scrollDown: () => scrollDown,
  scrollUp: () => scrollUp
});

// https://deno.land/std@0.196.0/encoding/base64.ts
var base64abc = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "/"
];
function encode(data) {
  const uint8 = typeof data === "string" ? new TextEncoder().encode(data) : data instanceof Uint8Array ? data : new Uint8Array(data);
  let result = "", i;
  const l = uint8.length;
  for (i = 2; i < l; i += 3) {
    result += base64abc[uint8[i - 2] >> 2];
    result += base64abc[(uint8[i - 2] & 3) << 4 | uint8[i - 1] >> 4];
    result += base64abc[(uint8[i - 1] & 15) << 2 | uint8[i] >> 6];
    result += base64abc[uint8[i] & 63];
  }
  if (i === l + 1) {
    result += base64abc[uint8[i - 2] >> 2];
    result += base64abc[(uint8[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += base64abc[uint8[i - 2] >> 2];
    result += base64abc[(uint8[i - 2] & 3) << 4 | uint8[i - 1] >> 4];
    result += base64abc[(uint8[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}

// https://deno.land/x/cliffy@v1.0.0-rc.3/ansi/ansi_escapes.ts
var ESC = "\x1B";
var CSI = `${ESC}[`;
var OSC = `${ESC}]`;
var SEP2 = ";";
var bel = "\x07";
var cursorPosition = `${CSI}6n`;
function cursorTo(x, y) {
  if (typeof y !== "number") {
    return `${CSI}${x}G`;
  }
  return `${CSI}${y};${x}H`;
}
function cursorMove(x, y) {
  let ret = "";
  if (x < 0) {
    ret += `${CSI}${-x}D`;
  } else if (x > 0) {
    ret += `${CSI}${x}C`;
  }
  if (y < 0) {
    ret += `${CSI}${-y}A`;
  } else if (y > 0) {
    ret += `${CSI}${y}B`;
  }
  return ret;
}
function cursorUp(count = 1) {
  return `${CSI}${count}A`;
}
function cursorDown(count = 1) {
  return `${CSI}${count}B`;
}
function cursorForward(count = 1) {
  return `${CSI}${count}C`;
}
function cursorBackward(count = 1) {
  return `${CSI}${count}D`;
}
function cursorNextLine(count = 1) {
  return `${CSI}E`.repeat(count);
}
function cursorPrevLine(count = 1) {
  return `${CSI}F`.repeat(count);
}
var cursorLeft = `${CSI}G`;
var cursorHide = `${CSI}?25l`;
var cursorShow = `${CSI}?25h`;
var cursorSave = `${ESC}7`;
var cursorRestore = `${ESC}8`;
function scrollUp(count = 1) {
  return `${CSI}S`.repeat(count);
}
function scrollDown(count = 1) {
  return `${CSI}T`.repeat(count);
}
var eraseScreen = `${CSI}2J`;
function eraseUp(count = 1) {
  return `${CSI}1J`.repeat(count);
}
function eraseDown(count = 1) {
  return `${CSI}0J`.repeat(count);
}
var eraseLine = `${CSI}2K`;
var eraseLineEnd = `${CSI}0K`;
var eraseLineStart = `${CSI}1K`;
function eraseLines(count) {
  let clear = "";
  for (let i = 0; i < count; i++) {
    clear += eraseLine + (i < count - 1 ? cursorUp() : "");
  }
  clear += cursorLeft;
  return clear;
}
var clearScreen = "\x1Bc";
var clearTerminal = Deno.build.os === "windows" ? `${eraseScreen}${CSI}0f` : `${eraseScreen}${CSI}3J${CSI}H`;
function link(text, url) {
  return [
    OSC,
    "8",
    SEP2,
    SEP2,
    url,
    bel,
    text,
    OSC,
    "8",
    SEP2,
    SEP2,
    bel
  ].join("");
}
function image(buffer, options) {
  let ret = `${OSC}1337;File=inline=1`;
  if (options?.width) {
    ret += `;width=${options.width}`;
  }
  if (options?.height) {
    ret += `;height=${options.height}`;
  }
  if (options?.preserveAspectRatio === false) {
    ret += ";preserveAspectRatio=0";
  }
  return ret + ":" + encode(buffer) + bel;
}

// https://deno.land/x/cliffy@v1.0.0-rc.3/ansi/cursor_position.ts
var encoder2 = new TextEncoder();
var decoder = new TextDecoder();
function getCursorPosition({
  reader = Deno.stdin,
  writer = Deno.stdout
} = {}) {
  const data = new Uint8Array(8);
  reader.setRaw(true);
  writer.writeSync(encoder2.encode(cursorPosition));
  reader.readSync(data);
  reader.setRaw(false);
  const [y, x] = decoder.decode(data).match(/\[(\d+);(\d+)R/)?.slice(1, 3).map(Number) ?? [0, 0];
  return { x, y };
}

// https://deno.land/x/cliffy@v1.0.0-rc.3/ansi/tty.ts
var tty = factory2();
var encoder3 = new TextEncoder();
function factory2(options) {
  let result = "";
  let stack = [];
  const writer = options?.writer ?? Deno.stdout;
  const reader = options?.reader ?? Deno.stdin;
  const tty2 = function(...args) {
    if (this) {
      update(args);
      writer.writeSync(encoder3.encode(result));
      return this;
    }
    return factory2(args[0] ?? options);
  };
  tty2.text = function(text) {
    stack.push([text, []]);
    update();
    writer.writeSync(encoder3.encode(result));
    return this;
  };
  tty2.getCursorPosition = () => getCursorPosition({ writer, reader });
  const methodList = Object.entries(
    ansi_escapes_exports
  );
  for (const [name, method] of methodList) {
    if (name === "cursorPosition") {
      continue;
    }
    Object.defineProperty(tty2, name, {
      get() {
        stack.push([method, []]);
        return this;
      }
    });
  }
  return tty2;
  function update(args) {
    if (!stack.length) {
      return;
    }
    if (args) {
      stack[stack.length - 1][1] = args;
    }
    result = stack.reduce(
      (prev, [cur, args2]) => prev + (typeof cur === "string" ? cur : cur.call(tty2, ...args2)),
      ""
    );
    stack = [];
  }
}

// https://deno.land/x/cliffy@v1.0.0-rc.3/keycode/_key_codes.ts
var KeyMap = {
  /* xterm/gnome ESC [ letter (with modifier) */
  "[P": "f1",
  "[Q": "f2",
  "[R": "f3",
  "[S": "f4",
  /* xterm/gnome ESC O letter (without modifier) */
  "OP": "f1",
  "OQ": "f2",
  "OR": "f3",
  "OS": "f4",
  /* xterm/rxvt ESC [ number ~ */
  "[11~": "f1",
  "[12~": "f2",
  "[13~": "f3",
  "[14~": "f4",
  /* from Cygwin and used in libuv */
  "[[A": "f1",
  "[[B": "f2",
  "[[C": "f3",
  "[[D": "f4",
  "[[E": "f5",
  /* common */
  "[15~": "f5",
  "[17~": "f6",
  "[18~": "f7",
  "[19~": "f8",
  "[20~": "f9",
  "[21~": "f10",
  "[23~": "f11",
  "[24~": "f12",
  /* xterm ESC [ letter */
  "[A": "up",
  "[B": "down",
  "[C": "right",
  "[D": "left",
  "[E": "clear",
  "[F": "end",
  "[H": "home",
  /* xterm/gnome ESC O letter */
  "OA": "up",
  "OB": "down",
  "OC": "right",
  "OD": "left",
  "OE": "clear",
  "OF": "end",
  "OH": "home",
  /* xterm/rxvt ESC [ number ~ */
  "[1~": "home",
  "[2~": "insert",
  "[3~": "delete",
  "[4~": "end",
  "[5~": "pageup",
  "[6~": "pagedown",
  /* putty */
  "[[5~": "pageup",
  "[[6~": "pagedown",
  /* rxvt */
  "[7~": "home",
  "[8~": "end"
};
var KeyMapShift = {
  /* rxvt keys with modifiers */
  "[a": "up",
  "[b": "down",
  "[c": "right",
  "[d": "left",
  "[e": "clear",
  "[2$": "insert",
  "[3$": "delete",
  "[5$": "pageup",
  "[6$": "pagedown",
  "[7$": "home",
  "[8$": "end",
  "[Z": "tab"
};
var KeyMapCtrl = {
  /* rxvt keys with modifiers */
  "Oa": "up",
  "Ob": "down",
  "Oc": "right",
  "Od": "left",
  "Oe": "clear",
  "[2^": "insert",
  "[3^": "delete",
  "[5^": "pageup",
  "[6^": "pagedown",
  "[7^": "home",
  "[8^": "end"
};
var SpecialKeyMap = {
  "\r": "return",
  "\n": "enter",
  "	": "tab",
  "\b": "backspace",
  "\x7F": "backspace",
  "\x1B": "escape",
  " ": "space"
};

// https://deno.land/x/cliffy@v1.0.0-rc.3/keycode/key_code.ts
var kUTF16SurrogateThreshold = 65536;
var kEscape = "\x1B";
function parse4(data) {
  let index = -1;
  const keys = [];
  const input = data instanceof Uint8Array ? new TextDecoder().decode(data) : data;
  const hasNext = () => input.length - 1 >= index + 1;
  const next = () => input[++index];
  parseNext();
  return keys;
  function parseNext() {
    let ch = next();
    let s = ch;
    let escaped = false;
    const key = {
      name: void 0,
      char: void 0,
      sequence: void 0,
      code: void 0,
      ctrl: false,
      meta: false,
      shift: false
    };
    if (ch === kEscape && hasNext()) {
      escaped = true;
      s += ch = next();
      if (ch === kEscape) {
        s += ch = next();
      }
    }
    if (escaped && (ch === "O" || ch === "[")) {
      let code3 = ch;
      let modifier = 0;
      if (ch === "O") {
        s += ch = next();
        if (ch >= "0" && ch <= "9") {
          modifier = (Number(ch) >> 0) - 1;
          s += ch = next();
        }
        code3 += ch;
      } else if (ch === "[") {
        s += ch = next();
        if (ch === "[") {
          code3 += ch;
          s += ch = next();
        }
        const cmdStart = s.length - 1;
        if (ch >= "0" && ch <= "9") {
          s += ch = next();
          if (ch >= "0" && ch <= "9") {
            s += ch = next();
          }
        }
        if (ch === ";") {
          s += ch = next();
          if (ch >= "0" && ch <= "9") {
            s += next();
          }
        }
        const cmd = s.slice(cmdStart);
        let match2;
        if (match2 = cmd.match(/^(\d\d?)(;(\d))?([~^$])$/)) {
          code3 += match2[1] + match2[4];
          modifier = (Number(match2[3]) || 1) - 1;
        } else if (match2 = cmd.match(/^((\d;)?(\d))?([A-Za-z])$/)) {
          code3 += match2[4];
          modifier = (Number(match2[3]) || 1) - 1;
        } else {
          code3 += cmd;
        }
      }
      key.ctrl = !!(modifier & 4);
      key.meta = !!(modifier & 10);
      key.shift = !!(modifier & 1);
      key.code = code3;
      if (code3 in KeyMap) {
        key.name = KeyMap[code3];
      } else if (code3 in KeyMapShift) {
        key.name = KeyMapShift[code3];
        key.shift = true;
      } else if (code3 in KeyMapCtrl) {
        key.name = KeyMapCtrl[code3];
        key.ctrl = true;
      } else {
        key.name = "undefined";
      }
    } else if (ch in SpecialKeyMap) {
      key.name = SpecialKeyMap[ch];
      key.meta = escaped;
      if (key.name === "space") {
        key.char = ch;
      }
    } else if (!escaped && ch <= "") {
      key.name = String.fromCharCode(
        ch.charCodeAt(0) + "a".charCodeAt(0) - 1
      );
      key.ctrl = true;
      key.char = key.name;
    } else if (/^[0-9A-Za-z]$/.test(ch)) {
      key.name = ch.toLowerCase();
      key.shift = /^[A-Z]$/.test(ch);
      key.meta = escaped;
      key.char = ch;
    } else if (escaped) {
      key.name = ch.length ? void 0 : "escape";
      key.meta = true;
    } else {
      key.name = ch;
      key.char = ch;
    }
    key.sequence = s;
    if (s.length !== 0 && (key.name !== void 0 || escaped) || charLengthAt(s, 0) === s.length) {
      keys.push(key);
    } else {
      throw new Error("Unrecognized or broken escape sequence");
    }
    if (hasNext()) {
      parseNext();
    }
  }
}
function charLengthAt(str, i) {
  const pos = str.codePointAt(i);
  if (typeof pos === "undefined") {
    return 1;
  }
  return pos >= kUTF16SurrogateThreshold ? 2 : 1;
}

// https://deno.land/x/cliffy@v1.0.0-rc.3/prompt/_generic_prompt.ts
var GenericPrompt = class _GenericPrompt {
  static injectedValue;
  cursor = {
    x: 0,
    y: 0
  };
  #value;
  #lastError;
  #isFirstRun = true;
  #encoder = new TextEncoder();
  /**
   * Inject prompt value. If called, the prompt doesn't prompt for an input and
   * returns immediately the injected value. Can be used for unit tests or pre
   * selections.
   *
   * @param value Input value.
   */
  static inject(value) {
    _GenericPrompt.injectedValue = value;
  }
  getDefaultSettings(options) {
    return {
      ...options,
      tty: tty({
        // Stdin is only used by getCursorPosition which we don't need.
        reader: Deno.stdin,
        writer: options.writer ?? Deno.stdout
      }),
      cbreak: options.cbreak ?? false,
      reader: options.reader ?? Deno.stdin,
      writer: options.writer ?? Deno.stdout,
      pointer: options.pointer ?? brightBlue2(Figures.POINTER_SMALL),
      prefix: options.prefix ?? yellow2("? "),
      indent: options.indent ?? "",
      keys: {
        submit: ["enter", "return"],
        ...options.keys ?? {}
      }
    };
  }
  /** Execute the prompt. */
  async prompt() {
    try {
      return await this.#execute();
    } finally {
      this.settings.tty.cursorShow();
    }
  }
  /** Clear prompt output. */
  clear() {
    this.settings.tty.cursorLeft.eraseDown();
  }
  /** Execute the prompt. */
  #execute = async () => {
    if (typeof _GenericPrompt.injectedValue !== "undefined" && this.#lastError) {
      throw new Error(this.error());
    }
    await this.render();
    this.#lastError = void 0;
    if (!await this.read()) {
      return this.#execute();
    }
    if (typeof this.#value === "undefined") {
      throw new Error("internal error: failed to read value");
    }
    this.clear();
    const successMessage = this.success(this.#value);
    if (successMessage) {
      this.settings.writer.writeSync(
        this.#encoder.encode(successMessage + "\n")
      );
    }
    _GenericPrompt.injectedValue = void 0;
    this.settings.tty.cursorShow();
    return this.#value;
  };
  /** Render prompt. */
  async render() {
    const result = await Promise.all([
      this.message(),
      this.body?.(),
      this.footer()
    ]);
    const content = result.filter(Boolean).join("\n");
    const lines = content.split("\n");
    const columns = getColumns();
    const linesCount = columns ? lines.reduce((prev, next) => {
      const length = stripColor2(next).length;
      return prev + (length > columns ? Math.ceil(length / columns) : 1);
    }, 0) : content.split("\n").length;
    const y = linesCount - this.cursor.y - 1;
    if (!this.#isFirstRun || this.#lastError) {
      this.clear();
    }
    this.#isFirstRun = false;
    this.settings.writer.writeSync(this.#encoder.encode(content));
    if (y) {
      this.settings.tty.cursorUp(y);
    }
    this.settings.tty.cursorTo(this.cursor.x);
  }
  /** Read user input from stdin, handle events and validate user input. */
  async read() {
    if (typeof _GenericPrompt.injectedValue !== "undefined") {
      const value = _GenericPrompt.injectedValue;
      await this.#validateValue(value);
    } else {
      const events = await this.#readKey();
      if (!events.length) {
        return false;
      }
      for (const event of events) {
        await this.handleEvent(event);
      }
    }
    return typeof this.#value !== "undefined";
  }
  submit() {
    return this.#validateValue(this.getValue());
  }
  message() {
    return `${this.settings.indent}${this.settings.prefix}` + bold2(this.settings.message) + this.defaults();
  }
  defaults() {
    let defaultMessage = "";
    if (typeof this.settings.default !== "undefined" && !this.settings.hideDefault) {
      defaultMessage += dim2(` (${this.format(this.settings.default)})`);
    }
    return defaultMessage;
  }
  /** Get prompt success message. */
  success(value) {
    return `${this.settings.indent}${this.settings.prefix}` + bold2(this.settings.message) + this.defaults() + " " + this.settings.pointer + " " + green2(this.format(value));
  }
  footer() {
    return this.error() ?? this.hint();
  }
  error() {
    return this.#lastError ? this.settings.indent + red2(bold2(`${Figures.CROSS} `) + this.#lastError) : void 0;
  }
  hint() {
    return this.settings.hint ? this.settings.indent + italic2(brightBlue2(dim2(`${Figures.POINTER} `) + this.settings.hint)) : void 0;
  }
  setErrorMessage(message2) {
    this.#lastError = message2;
  }
  /**
   * Handle user input event.
   * @param event Key event.
   */
  async handleEvent(event) {
    switch (true) {
      case (event.name === "c" && event.ctrl):
        this.clear();
        this.settings.tty.cursorShow();
        Deno.exit(130);
        return;
      case this.isKey(this.settings.keys, "submit", event):
        await this.submit();
        break;
    }
  }
  /** Read user input from stdin and pars ansi codes. */
  #readKey = async () => {
    const data = await this.#readChar();
    return data.length ? parse4(data) : [];
  };
  /** Read user input from stdin. */
  #readChar = async () => {
    const buffer = new Uint8Array(8);
    const isTty = Deno.isatty(this.settings.reader.rid);
    if (isTty) {
      this.settings.reader.setRaw(
        true,
        { cbreak: this.settings.cbreak }
      );
    }
    const nread = await this.settings.reader.read(buffer);
    if (isTty) {
      this.settings.reader.setRaw(false);
    }
    if (nread === null) {
      return buffer;
    }
    return buffer.subarray(0, nread);
  };
  /**
   * Map input value to output value. If a custom transform handler ist set, the
   * custom handler will be executed, otherwise the default transform handler
   * from the prompt will be executed.
   * @param value The value to transform.
   */
  #transformValue = (value) => {
    return this.settings.transform ? this.settings.transform(value) : this.transform(value);
  };
  /**
   * Validate input value. Set error message if validation fails and transform
   * output value on success.
   * If a default value is set, the default will be used as value without any
   * validation.
   * If a custom validation handler ist set, the custom handler will
   * be executed, otherwise a prompt specific default validation handler will be
   * executed.
   * @param value The value to validate.
   */
  #validateValue = async (value) => {
    if (!value && typeof this.settings.default !== "undefined") {
      this.#value = this.settings.default;
      return;
    }
    this.#value = void 0;
    this.#lastError = void 0;
    const validation = await (this.settings.validate ? this.settings.validate(value) : this.validate(value));
    if (validation === false) {
      this.#lastError = `Invalid answer.`;
    } else if (typeof validation === "string") {
      this.#lastError = validation;
    } else {
      this.#value = this.#transformValue(value);
    }
  };
  /**
   * Check if key event has given name or sequence.
   * @param keys  Key map.
   * @param name  Key name.
   * @param event Key event.
   */
  isKey(keys, name, event) {
    const keyNames = keys?.[name];
    return typeof keyNames !== "undefined" && (typeof event.name !== "undefined" && keyNames.indexOf(event.name) !== -1 || typeof event.sequence !== "undefined" && keyNames.indexOf(event.sequence) !== -1);
  }
};
function getColumns() {
  try {
    return Deno.consoleSize().columns ?? null;
  } catch (_error) {
    return null;
  }
}

// https://deno.land/x/cliffy@v1.0.0-rc.3/prompt/_generic_input.ts
var GenericInput = class extends GenericPrompt {
  inputValue = "";
  inputIndex = 0;
  getDefaultSettings(options) {
    const settings = super.getDefaultSettings(options);
    return {
      ...settings,
      keys: {
        moveCursorLeft: ["left"],
        moveCursorRight: ["right"],
        deleteCharLeft: ["backspace"],
        deleteCharRight: ["delete"],
        ...settings.keys ?? {}
      }
    };
  }
  getCurrentInputValue() {
    return this.inputValue;
  }
  message() {
    const message2 = super.message() + " " + this.settings.pointer + " ";
    this.cursor.x = stripColor2(message2).length + this.inputIndex + 1;
    return message2 + this.input();
  }
  input() {
    return underline2(this.inputValue);
  }
  highlight(value, color1 = dim2, color2 = brightBlue2) {
    value = value.toString();
    const inputLowerCase = this.getCurrentInputValue().toLowerCase();
    const valueLowerCase = value.toLowerCase();
    const index = valueLowerCase.indexOf(inputLowerCase);
    const matched = value.slice(index, index + inputLowerCase.length);
    return index >= 0 ? color1(value.slice(0, index)) + color2(matched) + color1(value.slice(index + inputLowerCase.length)) : value;
  }
  /**
   * Handle user input event.
   * @param event Key event.
   */
  async handleEvent(event) {
    switch (true) {
      case this.isKey(this.settings.keys, "moveCursorLeft", event):
        this.moveCursorLeft();
        break;
      case this.isKey(this.settings.keys, "moveCursorRight", event):
        this.moveCursorRight();
        break;
      case this.isKey(this.settings.keys, "deleteCharRight", event):
        this.deleteCharRight();
        break;
      case this.isKey(this.settings.keys, "deleteCharLeft", event):
        this.deleteChar();
        break;
      case (event.char && !event.meta && !event.ctrl):
        this.addChar(event.char);
        break;
      default:
        await super.handleEvent(event);
    }
  }
  /** Add character to current input. */
  addChar(char) {
    this.inputValue = this.inputValue.slice(0, this.inputIndex) + char + this.inputValue.slice(this.inputIndex);
    this.inputIndex++;
  }
  /** Move prompt cursor left. */
  moveCursorLeft() {
    if (this.inputIndex > 0) {
      this.inputIndex--;
    }
  }
  /** Move prompt cursor right. */
  moveCursorRight() {
    if (this.inputIndex < this.inputValue.length) {
      this.inputIndex++;
    }
  }
  /** Delete char left. */
  deleteChar() {
    if (this.inputIndex > 0) {
      this.inputIndex--;
      this.deleteCharRight();
    }
  }
  /** Delete char right. */
  deleteCharRight() {
    if (this.inputIndex < this.inputValue.length) {
      this.inputValue = this.inputValue.slice(0, this.inputIndex) + this.inputValue.slice(this.inputIndex + 1);
    }
  }
};

// https://deno.land/x/cliffy@v1.0.0-rc.3/_utils/distance.ts
function distance(a, b) {
  if (a.length == 0) {
    return b.length;
  }
  if (b.length == 0) {
    return a.length;
  }
  const matrix = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) == a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

// https://deno.land/x/cliffy@v1.0.0-rc.3/prompt/_generic_suggestions.ts
var sep3 = Deno.build.os === "windows" ? "\\" : "/";
var GenericSuggestions = class extends GenericInput {
  suggestionsIndex = -1;
  suggestionsOffset = 0;
  suggestions = [];
  #hasReadPermissions;
  getDefaultSettings(options) {
    const settings = super.getDefaultSettings(options);
    return {
      ...settings,
      listPointer: options.listPointer ?? brightBlue2(Figures.POINTER),
      maxRows: options.maxRows ?? 8,
      keys: {
        complete: ["tab"],
        next: ["up"],
        previous: ["down"],
        nextPage: ["pageup"],
        previousPage: ["pagedown"],
        ...settings.keys ?? {}
      }
    };
  }
  get localStorage() {
    if (this.settings.id && "localStorage" in window) {
      try {
        return window.localStorage;
      } catch (_) {
      }
    }
    return null;
  }
  loadSuggestions() {
    if (this.settings.id) {
      const json2 = this.localStorage?.getItem(this.settings.id);
      const suggestions = json2 ? JSON.parse(json2) : [];
      if (!Array.isArray(suggestions)) {
        return [];
      }
      return suggestions;
    }
    return [];
  }
  saveSuggestions(...suggestions) {
    if (this.settings.id) {
      this.localStorage?.setItem(
        this.settings.id,
        JSON.stringify([
          ...suggestions,
          ...this.loadSuggestions()
        ].filter(uniqueSuggestions))
      );
    }
  }
  async render() {
    if (this.settings.files && this.#hasReadPermissions === void 0) {
      const status = await Deno.permissions.request({ name: "read" });
      this.#hasReadPermissions = status.state === "granted";
    }
    await this.match();
    return super.render();
  }
  async match() {
    this.suggestions = await this.getSuggestions();
    this.suggestionsIndex = Math.max(
      this.getCurrentInputValue().trim().length === 0 ? -1 : 0,
      Math.min(this.suggestions.length - 1, this.suggestionsIndex)
    );
    this.suggestionsOffset = Math.max(
      0,
      Math.min(
        this.suggestions.length - this.getListHeight(),
        this.suggestionsOffset
      )
    );
  }
  input() {
    return super.input() + dim2(this.getSuggestion());
  }
  getSuggestion() {
    return this.suggestions[this.suggestionsIndex]?.toString().substr(
      this.getCurrentInputValue().length
    ) ?? "";
  }
  async getUserSuggestions(input) {
    return typeof this.settings.suggestions === "function" ? await this.settings.suggestions(input) : this.settings.suggestions ?? [];
  }
  #isFileModeEnabled() {
    return !!this.settings.files && this.#hasReadPermissions === true;
  }
  async getFileSuggestions(input) {
    if (!this.#isFileModeEnabled()) {
      return [];
    }
    const path3 = await Deno.stat(input).then((file) => file.isDirectory ? input : dirname3(input)).catch(() => dirname3(input));
    return await listDir(path3, this.settings.files);
  }
  async getSuggestions() {
    const input = this.getCurrentInputValue();
    const suggestions = [
      ...this.loadSuggestions(),
      ...await this.getUserSuggestions(input),
      ...await this.getFileSuggestions(input)
    ].filter(uniqueSuggestions);
    if (!input.length) {
      return suggestions;
    }
    return suggestions.filter(
      (value) => stripColor2(value.toString()).toLowerCase().startsWith(input.toLowerCase())
    ).sort(
      (a, b) => distance((a || a).toString(), input) - distance((b || b).toString(), input)
    );
  }
  body() {
    return this.getList() + this.getInfo();
  }
  getInfo() {
    if (!this.settings.info) {
      return "";
    }
    const selected = this.suggestionsIndex + 1;
    const matched = this.suggestions.length;
    const actions = [];
    if (this.suggestions.length) {
      if (this.settings.list) {
        actions.push(
          ["Next", getFiguresByKeys(this.settings.keys?.next ?? [])],
          ["Previous", getFiguresByKeys(this.settings.keys?.previous ?? [])],
          ["Next Page", getFiguresByKeys(this.settings.keys?.nextPage ?? [])],
          [
            "Previous Page",
            getFiguresByKeys(this.settings.keys?.previousPage ?? [])
          ]
        );
      } else {
        actions.push(
          ["Next", getFiguresByKeys(this.settings.keys?.next ?? [])],
          ["Previous", getFiguresByKeys(this.settings.keys?.previous ?? [])]
        );
      }
      actions.push(
        ["Complete", getFiguresByKeys(this.settings.keys?.complete ?? [])]
      );
    }
    actions.push(
      ["Submit", getFiguresByKeys(this.settings.keys?.submit ?? [])]
    );
    let info6 = this.settings.indent;
    if (this.suggestions.length) {
      info6 += brightBlue2(Figures.INFO) + bold2(` ${selected}/${matched} `);
    }
    info6 += actions.map((cur) => `${cur[0]}: ${bold2(cur[1].join(" "))}`).join(", ");
    return info6;
  }
  getList() {
    if (!this.suggestions.length || !this.settings.list) {
      return "";
    }
    const list = [];
    const height = this.getListHeight();
    for (let i = this.suggestionsOffset; i < this.suggestionsOffset + height; i++) {
      list.push(
        this.getListItem(
          this.suggestions[i],
          this.suggestionsIndex === i
        )
      );
    }
    if (list.length && this.settings.info) {
      list.push("");
    }
    return list.join("\n");
  }
  /**
   * Render option.
   * @param value        Option.
   * @param isSelected  Set to true if option is selected.
   */
  getListItem(value, isSelected) {
    let line = this.settings.indent ?? "";
    line += isSelected ? `${this.settings.listPointer} ` : "  ";
    if (isSelected) {
      line += underline2(this.highlight(value));
    } else {
      line += this.highlight(value);
    }
    return line;
  }
  /** Get suggestions row height. */
  getListHeight(suggestions = this.suggestions) {
    return Math.min(
      suggestions.length,
      this.settings.maxRows || suggestions.length
    );
  }
  /**
   * Handle user input event.
   * @param event Key event.
   */
  async handleEvent(event) {
    switch (true) {
      case this.isKey(this.settings.keys, "next", event):
        if (this.settings.list) {
          this.selectPreviousSuggestion();
        } else {
          this.selectNextSuggestion();
        }
        break;
      case this.isKey(this.settings.keys, "previous", event):
        if (this.settings.list) {
          this.selectNextSuggestion();
        } else {
          this.selectPreviousSuggestion();
        }
        break;
      case this.isKey(this.settings.keys, "nextPage", event):
        if (this.settings.list) {
          this.selectPreviousSuggestionsPage();
        } else {
          this.selectNextSuggestionsPage();
        }
        break;
      case this.isKey(this.settings.keys, "previousPage", event):
        if (this.settings.list) {
          this.selectNextSuggestionsPage();
        } else {
          this.selectPreviousSuggestionsPage();
        }
        break;
      case this.isKey(this.settings.keys, "complete", event):
        await this.#completeValue();
        break;
      case this.isKey(this.settings.keys, "moveCursorRight", event):
        if (this.inputIndex < this.inputValue.length) {
          this.moveCursorRight();
        } else {
          await this.#completeValue();
        }
        break;
      default:
        await super.handleEvent(event);
    }
  }
  /** Delete char right. */
  deleteCharRight() {
    if (this.inputIndex < this.inputValue.length) {
      super.deleteCharRight();
      if (!this.getCurrentInputValue().length) {
        this.suggestionsIndex = -1;
        this.suggestionsOffset = 0;
      }
    }
  }
  async #completeValue() {
    this.inputValue = await this.complete();
    this.inputIndex = this.inputValue.length;
    this.suggestionsIndex = 0;
    this.suggestionsOffset = 0;
  }
  async complete() {
    let input = this.getCurrentInputValue();
    const suggestion = this.suggestions[this.suggestionsIndex]?.toString();
    if (this.settings.complete) {
      input = await this.settings.complete(input, suggestion);
    } else if (this.#isFileModeEnabled() && input.at(-1) !== sep3 && await isDirectory(input) && (this.getCurrentInputValue().at(-1) !== "." || this.getCurrentInputValue().endsWith(".."))) {
      input += sep3;
    } else if (suggestion) {
      input = suggestion;
    }
    return this.#isFileModeEnabled() ? normalize4(input) : input;
  }
  /** Select previous suggestion. */
  selectPreviousSuggestion() {
    if (this.suggestions.length) {
      if (this.suggestionsIndex > -1) {
        this.suggestionsIndex--;
        if (this.suggestionsIndex < this.suggestionsOffset) {
          this.suggestionsOffset--;
        }
      }
    }
  }
  /** Select next suggestion. */
  selectNextSuggestion() {
    if (this.suggestions.length) {
      if (this.suggestionsIndex < this.suggestions.length - 1) {
        this.suggestionsIndex++;
        if (this.suggestionsIndex >= this.suggestionsOffset + this.getListHeight()) {
          this.suggestionsOffset++;
        }
      }
    }
  }
  /** Select previous suggestions page. */
  selectPreviousSuggestionsPage() {
    if (this.suggestions.length) {
      const height = this.getListHeight();
      if (this.suggestionsOffset >= height) {
        this.suggestionsIndex -= height;
        this.suggestionsOffset -= height;
      } else if (this.suggestionsOffset > 0) {
        this.suggestionsIndex -= this.suggestionsOffset;
        this.suggestionsOffset = 0;
      }
    }
  }
  /** Select next suggestions page. */
  selectNextSuggestionsPage() {
    if (this.suggestions.length) {
      const height = this.getListHeight();
      if (this.suggestionsOffset + height + height < this.suggestions.length) {
        this.suggestionsIndex += height;
        this.suggestionsOffset += height;
      } else if (this.suggestionsOffset + height < this.suggestions.length) {
        const offset = this.suggestions.length - height;
        this.suggestionsIndex += offset - this.suggestionsOffset;
        this.suggestionsOffset = offset;
      }
    }
  }
};
function uniqueSuggestions(value, index, self) {
  return typeof value !== "undefined" && value !== "" && self.indexOf(value) === index;
}
function isDirectory(path3) {
  return Deno.stat(path3).then((file) => file.isDirectory).catch(() => false);
}
async function listDir(path3, mode) {
  const fileNames = [];
  for await (const file of Deno.readDir(path3 || ".")) {
    if (mode === true && (file.name.startsWith(".") || file.name.endsWith("~"))) {
      continue;
    }
    const filePath = join4(path3, file.name);
    if (mode instanceof RegExp && !mode.test(filePath)) {
      continue;
    }
    fileNames.push(filePath);
  }
  return fileNames.sort(function(a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
}

// https://deno.land/x/cliffy@v1.0.0-rc.3/prompt/input.ts
var Input = class extends GenericSuggestions {
  settings;
  /** Execute the prompt with provided options. */
  static prompt(options) {
    return new this(options).prompt();
  }
  /**
   * Inject prompt value. If called, the prompt doesn't prompt for an input and
   * returns immediately the injected value. Can be used for unit tests or pre
   * selections.
   *
   * @param value Input value.
   */
  static inject(value) {
    GenericPrompt.inject(value);
  }
  constructor(options) {
    super();
    if (typeof options === "string") {
      options = { message: options };
    }
    this.settings = this.getDefaultSettings(options);
  }
  getDefaultSettings(options) {
    return {
      ...super.getDefaultSettings(options),
      minLength: options.minLength ?? 0,
      maxLength: options.maxLength ?? Infinity
    };
  }
  success(value) {
    this.saveSuggestions(value);
    return super.success(value);
  }
  /** Get input value. */
  getValue() {
    return this.settings.files ? normalize4(this.inputValue) : this.inputValue;
  }
  /**
   * Validate input value.
   * @param value User input value.
   * @return True on success, false or error message on error.
   */
  validate(value) {
    if (typeof value !== "string") {
      return false;
    }
    if (value.length < this.settings.minLength) {
      return `Value must be longer than ${this.settings.minLength} but has a length of ${value.length}.`;
    }
    if (value.length > this.settings.maxLength) {
      return `Value can't be longer than ${this.settings.maxLength} but has a length of ${value.length}.`;
    }
    return true;
  }
  /**
   * Map input value to output value.
   * @param value Input value.
   * @return Output value.
   */
  transform(value) {
    return value.trim();
  }
  /**
   * Format output value.
   * @param value Output value.
   */
  format(value) {
    return value;
  }
};

// src/commands/readme.ts
var error4 = colors.bold.red;
var warn4 = colors.bold.yellow;
var info4 = colors.bold.blue;
var readmeCmd = new Command().name("readme").description("Create readme.").action(async () => {
  const name = await Input.prompt(`What's your project name?`);
  await Deno.writeTextFile(
    "readme.md",
    `
<p align="center">
<img src="https://ashishdotme-assets.s3.ap-south-1.amazonaws.com/logo.png" alt="drawing" width="100"/>
</p>

<h2 align="center">${name}</h2>

<p align="center">
<a href="https://img.shields.io/github/last-commit/ashishdotme/${name}?style=for-the-badge"><img src="https://img.shields.io/github/last-commit/ashishdotme/${name}?style=for-the-badge"></a>
</p>

<p align="center">\u{1F4E6} about project </p>

## Support

If you find this project useful, you can buy me a cup of coffee

<a href="https://patreon.com/ashishdotme/" target="_blank">
<img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" alt="Become a Patreon">
</a>

## Licence

${name} is open source and released under the MIT Licence.

## To connect with me

<p align = "center">

[<img src="https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white&color=black" />](https://twitter.com/ashishdotme)
[<img src="https://img.shields.io/badge/facebook-%2312100E.svg?&style=for-the-badge&logo=facebook&logoColor=white&color=black" />](https://facebook.com/ashishdotme)
[<img src="https://img.shields.io/badge/instagram-%2312100E.svg?&style=for-the-badge&logo=instagram&logoColor=white&color=black" />](https://instagram.com/ashishdotme)
[<img src ="https://img.shields.io/badge/website-%23.svg?&style=for-the-badge&logo=&logoColor=white%22&color=black">](https://ashish.me)

</p>
        
        `
  );
  console.log("Readme created");
});

// src/ap.ts
var error5 = colors.bold.red;
var warn5 = colors.bold.yellow;
var info5 = colors.bold.blue;
var rootCmd = new Command().name("ap").version(deno_default.version).action(
  async () => {
    const resp = await callApi(`/summary.json`, "https://app.ashish.me/api");
    if (!resp.ok) {
      console.error(await resp.text());
      Deno.exit(1);
    }
    const data = await resp.json();
    if (!data) {
      console.log(error5("[ERROR]"), "invalid response");
      Deno.exit(1);
    }
    console.log(
      info5(
        `Today - ${format2(/* @__PURE__ */ new Date(), "dd MMMM yyyy")}`
      )
    );
    console.log(
      info5(
        `Last leetcode date - ${format2(new Date(data.lastLeetcode.created), "dd MMMM yyyy")}`
      )
    );
    console.log(
      info5(
        `Last Github Commit Date - ${format2(new Date(data.github.lastCommit), "dd MMMM yyyy")}`
      )
    );
  }
);
rootCmd.command("movie", movieCmd);
rootCmd.command("event", eventCmd);
rootCmd.command("transaction", transactionCmd);
rootCmd.command("readme", readmeCmd);
rootCmd.command("completions", new CompletionsCommand());
rootCmd.command(
  "upgrade",
  new UpgradeCommand({
    args: ["--allow-all"],
    provider: new JsrProvider({
      package: "@ashishdotme/ap"
    })
  })
);
await rootCmd.parse();
