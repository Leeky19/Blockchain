const Marriage = artifacts.require("Marriage");

module.exports = function (deployer) {
  deployer.deploy(Marriage, "0x66FF5050A8e4cbdD34DCb7A3Ff98760B1eB9Ec11", "0x3f29804556f23810238D84662AD5609204ebaF75"); //adresse 1 = epoux 1, adresse 2 = epoux 2
};
