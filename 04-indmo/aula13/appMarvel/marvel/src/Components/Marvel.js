import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const BASE_URL = "http://gateway.marvel.com/v1/public/characters";
const API_KEY = "d7a31d58aad547ea00b2e4dfe96db41c";
const HASH = "797c299de5a8289ec40e86b35483e4c79a77e8d1";