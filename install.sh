#!/bin/bash

INSTALL_DIR="/usr/local/bin"
EXECUTABLE_NAME="ap"
COMPILED_FILE=$(mktemp)
curl -o "$COMPILED_FILE" https://raw.githubusercontent.com/ashishdotme/cli/refs/heads/main/dist/ap.esm.js
sudo mkdir -p "$INSTALL_DIR"
sudo mv "$COMPILED_FILE" "$INSTALL_DIR/$EXECUTABLE_NAME.js"
WRAPPER="$INSTALL_DIR/$EXECUTABLE_NAME"
sudo tee "$WRAPPER" > /dev/null <<EOL
#!/bin/bash
deno run -A "$INSTALL_DIR/$EXECUTABLE_NAME.js" "\$@"
EOL

sudo chmod +x "$WRAPPER"
[ -f "$COMPILED_FILE" ] && rm "$COMPILED_FILE"

echo "Done"