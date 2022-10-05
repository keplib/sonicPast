"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("./index");
const app = (0, index_1.createApp)();
describe("Index", () => {
  afterAll(() => {
    index_1.server.close();
  });
  const testApp = (0, index_1.createApp)();
  it("should create server app", () => {
    expect(typeof testApp).toBe("function");
  });
});
describe("Controller getApiChart", () => {
  describe("with correct params", () => {
    it("should get list", () =>
      __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(app)
          .get("/api/chart")
          .query({ date: "2016-08-27" })
          .expect(200);
      }));
  });
  describe("if no date is provided", () => {
    it("should get a 404", () =>
      __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(app).get("/api/chart").expect(404);
      }));
  });
});
describe("getPlaylists", () => {
  it("should return route for callback", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      yield (0, supertest_1.default)(app)
        .get("/playlists")
        .expect("playlists route")
        .expect(200);
    }));
});
