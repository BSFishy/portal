{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };
      in
      {
        devShells = {
          default = pkgs.mkShell {
            buildInputs = [
              pkgs.nodejs_22
            ];
          };
        };


        checks = {
          fmt-check = pkgs.runCommand "fmt-check"
            {
              buildInputs = [ pkgs.nixpkgs-fmt ];
            } ''
            ${pkgs.nixpkgs-fmt}/bin/nixpkgs-fmt --check ${./.}
            touch $out # it worked!
          '';
        };

        formatter = pkgs.nixpkgs-fmt;
      });
}
