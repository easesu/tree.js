# tree.js

transform
```json
[
    "index.js",
    "package.json",
    {
        "styles": [
            "reset.css",
            "index.css"
        ],
        "images": {
            "logo": [
                "logo.png"
            ]
        }
    },
    {
        "scripts": [
            "index.js",
            {
                "actions": "index.js"
            },
            "utils.js"
        ]
    }
]
```
to

```bash
|-index.js
|-package.json
|   |-styles
|   |   |-reset.css
|   |   |_index.css
|   |_images
|       |_logo
|           |_logo.png
|_scripts
    |-index.js
    |   |_actions
    |       |_index.js
    |_utils.js
```
😊