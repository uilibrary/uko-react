import MockAdapter from "axios-mock-adapter";
import axios from "utils/axios";
const Mock = new MockAdapter(axios, { delayResponse: 0 });
export default Mock;
