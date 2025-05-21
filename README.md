# NanoKVM-USB ARM64

A Windows ARM64 fork of the [NanoKVM-USB](https://github.com/sipeed/NanoKVM-USB) desktop application by Sipeed.

## Features

- Windows ARM64 exclusive build
- Removed serialport functionality (not compatible with ARM64)
- Removed keyboard/mouse capture functionality
- Removed auto-update functionality
- Improved audio processing with disabled echo cancellation, auto gain control, and noise suppression

## Limitations

- This fork only supports Windows ARM64 platform
- Only video and audio functionality is available (no serialport, keyboard, or mouse capture)

## To Do

1. **Restore Serial Port Functionality**
   - The CH340 driver itself has compatible drivers for Windows ARM64, and I have installed and used them successfully
   - But the SerialPort module used in the project has compatibility issues, so all functionality was removed
   - Decided to focus only on the 'V' (Video) functionality of KVM first, as it was deemed difficult to complete in a short time
   - The SerialPort module works fine when built for x64, but continuously throws errors when built for ARM64, which I couldn't resolve with my current capabilities

2. **Find and Implement Alternative Serial Communication Module Compatible with ARM64**
   - Work in progress. Not immediately, but someday...

## How to Build

```bash
# Install dependencies
npm install

# Build for Windows ARM64
npm run build:win
```

## Credits

- Original project: [Sipeed NanoKVM-USB](https://github.com/sipeed/NanoKVM-USB)
- ARM64 fork by: TrissElan

## License

This project is licensed under the same license as the original Sipeed NanoKVM-USB project.

## Support

If you find this project useful, please consider supporting it.

[![donate](https://example.com/buy-me-a-coffee.png)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=WFXTNDJ3LYB2U)
