"use strict";

var example_sprite = { "colors": { "t": 11, "m1": 7, "m2": 10 }, "sprites": [{ "color": 1, "multicolor": true, "double_x": false, "double_y": false, "overlay": true, "pixels": [["t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t"], ["t", "t", "t", "t", "t", "t", "t", "t", "m1", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t"], ["t", "t", "t", "t", "t", "t", "m1", "t", "i", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t"], ["t", "t", "t", "t", "m1", "t", "m1", "t", "i", "t", "i", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t"], ["t", "t", "t", "t", "t", "t", "i", "t", "i", "t", "i", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t"], ["t", "t", "m2", "t", "m2", "t", "m2", "t", "m1", "t", "m1", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t"], ["m2", "t", "m2", "t", "m2", "t", "m2", "t", "m1", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "m1", "t", "t", "t"], ["t", "t", "t", "t", "t", "t", "m2", "t", "m1", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "m1", "t", "t", "t"], ["t", "t", "t", "t", "t", "t", "m1", "t", "m1", "t", "m1", "t", "t", "t", "t", "t", "t", "t", "i", "t", "m1", "t", "t", "t"], ["t", "t", "t", "t", "t", "t", "i", "t", "m1", "t", "m1", "t", "t", "t", "t", "t", "i", "t", "m1", "t", "m1", "t", "t", "t"], ["t", "t", "t", "t", "t", "t", "i", "t", "m1", "t", "m1", "t", "m1", "t", "i", "t", "m1", "t", "m1", "t", "t", "t", "t", "t"], ["t", "t", "t", "t", "i", "t", "m1", "t", "m1", "t", "m1", "t", "m1", "t", "m1", "t", "m1", "t", "m1", "t", "t", "t", "t", "t"], ["t", "t", "t", "t", "i", "t", "m1", "t", "m1", "t", "m1", "t", "m1", "t", "m1", "t", "m1", "t", "m1", "t", "t", "t", "t", "t"], ["t", "t", "t", "t", "m1", "t", "m1", "t", "m1", "t", "m1", "t", "m1", "t", "m1", "t", "m1", "t", "t", "t", "i", "t", "t", "t"], ["t", "t", "t", "t", "t", "t", "m1", "t", "m1", "t", "m1", "t", "m1", "t", "m1", "t", "m1", "t", "t", "t", "t", "t", "t", "t"], ["t", "t", "t", "t", "t", "t", "t", "t", "m1", "t", "m1", "t", "m1", "t", "m2", "t", "t", "t", "t", "t", "t", "t", "t", "t"], ["t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "m2", "t", "t", "t", "m2", "t", "t", "t", "t", "t", "t", "t", "t", "t"], ["t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "m2", "t", "t", "t", "m2", "t", "t", "t", "t", "t", "i", "t", "t", "t"], ["t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "m2", "t", "t", "t", "m2", "t", "t", "t", "t", "t", "i", "t", "t", "t"], ["t", "t", "t", "t", "t", "t", "t", "t", "m2", "t", "m2", "t", "m2", "t", "m2", "t", "t", "t", "i", "t", "m2", "t", "m2", "t"], ["t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t"]] }, { "color": 0, "multicolor": false, "double_x": false, "double_y": false, "overlay": false, "pixels": [["t", "t", "t", "t", "t", "t", "t", "t", "i", "i", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t"], ["t", "t", "t", "t", "t", "t", "t", "i", "t", "t", "i", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t"], ["t", "t", "t", "t", "t", "i", "i", "t", "i", "i", "i", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t"], ["t", "t", "t", "t", "i", "t", "i", "i", "t", "t", "t", "i", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t"], ["t", "t", "i", "i", "i", "i", "i", "t", "t", "i", "t", "t", "i", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t"], ["t", "i", "t", "t", "t", "t", "t", "i", "t", "t", "t", "i", "t", "t", "t", "t", "t", "t", "t", "t", "t", "i", "t", "t"], ["i", "t", "t", "t", "t", "t", "t", "t", "i", "i", "i", "t", "t", "t", "t", "t", "t", "t", "t", "t", "i", "t", "i", "t"], ["t", "i", "i", "i", "i", "i", "t", "t", "t", "t", "i", "t", "t", "t", "t", "t", "t", "t", "i", "i", "t", "t", "i", "t"], ["t", "t", "t", "t", "t", "t", "i", "t", "t", "t", "t", "i", "t", "t", "t", "t", "i", "i", "t", "t", "t", "i", "t", "t"], ["t", "t", "t", "t", "t", "t", "i", "t", "t", "t", "t", "t", "i", "i", "i", "i", "t", "t", "t", "t", "t", "i", "t", "t"], ["t", "t", "t", "t", "t", "i", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "i", "t", "t", "t"], ["t", "t", "t", "t", "i", "t", "t", "t", "t", "t", "i", "t", "t", "t", "t", "t", "i", "t", "t", "t", "i", "t", "t", "t"], ["t", "t", "t", "t", "i", "t", "t", "t", "i", "t", "t", "i", "t", "t", "t", "i", "t", "t", "t", "i", "t", "i", "t", "t"], ["t", "t", "t", "t", "i", "t", "t", "t", "t", "i", "t", "t", "t", "t", "i", "t", "t", "t", "i", "t", "i", "t", "i", "t"], ["t", "t", "t", "t", "t", "i", "t", "t", "t", "t", "i", "i", "i", "i", "t", "t", "t", "i", "t", "t", "t", "i", "t", "t"], ["t", "t", "t", "t", "t", "t", "i", "i", "t", "t", "t", "t", "t", "t", "t", "i", "i", "t", "t", "t", "t", "t", "t", "t"], ["t", "t", "t", "t", "t", "t", "t", "t", "i", "i", "t", "i", "i", "i", "t", "i", "t", "t", "t", "t", "t", "i", "t", "t"], ["t", "t", "t", "t", "t", "t", "t", "t", "t", "i", "t", "i", "t", "i", "t", "i", "t", "t", "t", "t", "i", "t", "i", "t"], ["t", "t", "t", "t", "t", "t", "t", "t", "i", "i", "t", "i", "i", "i", "t", "i", "t", "t", "t", "i", "t", "t", "i", "t"], ["t", "i", "t", "i", "t", "i", "i", "i", "i", "t", "t", "i", "i", "t", "t", "i", "i", "i", "i", "t", "t", "i", "t", "i"], ["i", "i", "i", "i", "i", "i", "i", "i", "i", "t", "t", "i", "i", "t", "t", "i", "i", "i", "i", "i", "i", "i", "i", "i"]] }], "current_sprite": 0, "pen": "i" };

function get_config() {

        var config = {
                version: 1.08,
                sprite_x: 24,
                sprite_y: 21,
                palettes: {
                        "colodore": ["#000000", "#ffffff", "#813338", "#75cec8", "#8e3c97", "#56ac4d", "#2e2c9b", "#edf171", "#8e5029", "#553800", "#c46c71", "#4a4a4a", "#7b7b7b", "#a9ff9f", "#706deb", "#b2b2b2"],
                        "pepto": ["#000000", "#ffffff", "#67372d", "#73a3b1", "#6e3e83", "#5b8d48", "#362976", "#b7c576", "#6c4f2a", "#423908", "#98675b", "#444444", "#6c6c6c", "#9dd28a", "#6d5fb0", "#959595"],
                        "custom": ["#000000", "#ffffff", "#813338", "#75cec8", "#8e3c97", "#56ac4d", "#2e2c9b", "#edf171", "#8e5029", "#553800", "#c46c71", "#4a4a4a", "#7b7b7b", "#a9ff9f", "#706deb", "#b2b2b2"] },
                selected_palette: "pepto",
                window_menu: {
                        "top": 25,
                        "left": 10
                },
                window_editor: {
                        "top": 25,
                        "left": 210,
                        "zoom": 18,
                        "grid": true
                },
                window_preview: {
                        "top": 25,
                        "left": 700,
                        "zoom": 6
                },
                window_list: {
                        "top": 240,
                        "left": 700,
                        "width": 440,
                        "height": 200,
                        "zoom": 4
                },
                window_palette: {
                        "top": 25,
                        "left": 110,
                        "zoom": 1
                }

        };

        return config;
}