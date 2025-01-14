const gameABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"character","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"weapon","type":"uint256"},{"indexed":false,"internalType":"uint32","name":"target","type":"uint32"},{"indexed":false,"internalType":"uint24","name":"playerRoll","type":"uint24"},{"indexed":false,"internalType":"uint24","name":"enemyRoll","type":"uint24"},{"indexed":false,"internalType":"uint16","name":"xpGain","type":"uint16"},{"indexed":false,"internalType":"uint256","name":"skillGain","type":"uint256"}],"name":"FightOutcome","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"skillAmount","type":"uint256"}],"name":"InGameOnlyFundsGiven","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GAME_ADMIN","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REWARDS_CLAIM_TAX_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REWARDS_CLAIM_TAX_MAX","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"characterID","type":"uint256"},{"internalType":"address","name":"playerAddress","type":"address"}],"name":"approveContractCharacterFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"weaponID","type":"uint256"},{"internalType":"address","name":"playerAddress","type":"address"}],"name":"approveContractWeaponFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"burnID","type":"uint256"}],"name":"burnWeapon","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"burnWeaponFee","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"burnIDs","type":"uint256[]"}],"name":"burnWeapons","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"characters","outputs":[{"internalType":"contract Characters","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimTokenRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimXpRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"char","type":"uint256"},{"internalType":"uint256","name":"wep","type":"uint256"},{"internalType":"uint32","name":"target","type":"uint32"},{"internalType":"uint8","name":"fightMultiplier","type":"uint8"}],"name":"fight","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fightRewardBaseline","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fightRewardGasOffset","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fightTraitBonus","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fightXpGain","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentHour","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint32","name":"target","type":"uint32"}],"name":"getMonsterPower","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getMyCharacters","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMyWeapons","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwnRewardsClaimTax","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint24","name":"basePower","type":"uint24"},{"internalType":"int128","name":"weaponMultiplier","type":"int128"},{"internalType":"uint24","name":"bonusPower","type":"uint24"}],"name":"getPlayerPower","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint24","name":"traitsCWE","type":"uint24"}],"name":"getPlayerTraitBonusAgainst","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"playerAddress","type":"address"},{"internalType":"uint256","name":"skillNeeded","type":"uint256"}],"name":"getSkillNeededFromUserWallet","outputs":[{"internalType":"uint256","name":"skillNeededFromUserWallet","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_inGameOnlyFunds","type":"uint256"},{"internalType":"uint256","name":"_tokenRewards","type":"uint256"},{"internalType":"uint256","name":"_skillNeeded","type":"uint256"}],"name":"getSkillToSubtract","outputs":[{"internalType":"uint256","name":"fromInGameOnlyFunds","type":"uint256"},{"internalType":"uint256","name":"fromTokenRewards","type":"uint256"},{"internalType":"uint256","name":"fromUserWallet","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"char","type":"uint256"},{"internalType":"uint256","name":"wep","type":"uint256"}],"name":"getTargets","outputs":[{"internalType":"uint32[4]","name":"","type":"uint32[4]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTokenRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"getTokenRewardsFor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"getTotalSkillOwnedBy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"char","type":"uint256"}],"name":"getXpRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"skillAmount","type":"uint256"}],"name":"giveInGameOnlyFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"skillAmount","type":"uint256"}],"name":"giveInGameOnlyFundsFromContractBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"inGameOnlyFunds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_skillToken","type":"address"},{"internalType":"contract Characters","name":"_characters","type":"address"},{"internalType":"contract Weapons","name":"_weapons","type":"address"},{"internalType":"contract IPriceOracle","name":"_priceOracleSkillPerUsd","type":"address"},{"internalType":"contract IRandoms","name":"_randoms","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"attacker","type":"uint8"},{"internalType":"uint8","name":"defender","type":"uint8"}],"name":"isTraitEffectiveAgainst","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"contract IRandoms","name":"_newRandoms","type":"address"}],"name":"migrateRandoms","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IStakeFromGame","name":"_stakeFromGame","type":"address"}],"name":"migrateTo_23b3a8b","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrateTo_801f279","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract Promos","name":"_promos","type":"address"}],"name":"migrateTo_ef994e2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintCharacter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintCharacterFee","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintWeapon","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintWeaponFee","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oneFrac","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"playerAddress","type":"address"},{"internalType":"int128","name":"usdAmount","type":"int128"}],"name":"payContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"playerAddress","type":"address"},{"internalType":"uint256","name":"convertedAmount","type":"uint256"}],"name":"payContractConverted","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"playerAddress","type":"address"},{"internalType":"int128","name":"baseAmount","type":"int128"}],"name":"payPlayer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"playerAddress","type":"address"},{"internalType":"uint256","name":"convertedAmount","type":"uint256"}],"name":"payPlayerConverted","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"priceOracleSkillPerUsd","outputs":[{"internalType":"contract IPriceOracle","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"promos","outputs":[{"internalType":"contract Promos","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"randoms","outputs":[{"internalType":"contract IRandoms","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverSkill","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"refillStaminaFee","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"reforgeID","type":"uint256"},{"internalType":"uint256","name":"burnID","type":"uint256"}],"name":"reforgeWeapon","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reforgeWeaponFee","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"reforgeID","type":"uint256"},{"internalType":"uint8","name":"amountLB","type":"uint8"},{"internalType":"uint8","name":"amount4B","type":"uint8"},{"internalType":"uint8","name":"amount5B","type":"uint8"}],"name":"reforgeWeaponWithDust","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reforgeWeaponWithDustFee","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"cents","type":"uint256"}],"name":"setBurnWeaponValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"max","type":"uint256"}],"name":"setCharacterLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"cents","type":"uint256"}],"name":"setCharacterMintValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"points","type":"uint8"}],"name":"setDurabilityCostFight","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tenthcents","type":"uint256"}],"name":"setFightRewardBaselineValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"cents","type":"uint256"}],"name":"setFightRewardGasOffsetValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"average","type":"uint256"}],"name":"setFightXpGain","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"cents","type":"uint256"}],"name":"setReforgeWeaponValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"cents","type":"uint256"}],"name":"setReforgeWeaponWithDustValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"points","type":"uint8"}],"name":"setStaminaCostFight","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"cents","type":"uint256"}],"name":"setWeaponMintValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"skillToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakeFromGameImpl","outputs":[{"internalType":"contract IStakeFromGame","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakeUnclaimedRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalInGameOnlyFunds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint96","name":"playerData","type":"uint96"}],"name":"unpackFightData","outputs":[{"internalType":"uint8","name":"charTrait","type":"uint8"},{"internalType":"uint24","name":"basePowerLevel","type":"uint24"},{"internalType":"uint64","name":"timestamp","type":"uint64"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"int128","name":"usdAmount","type":"int128"}],"name":"usdToSkill","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint24","name":"playerBasePower","type":"uint24"},{"internalType":"int128","name":"wepMultiplier","type":"int128"},{"internalType":"uint24","name":"wepBonusPower","type":"uint24"},{"internalType":"uint64","name":"staminaTimestamp","type":"uint64"},{"internalType":"uint256","name":"hour","type":"uint256"},{"internalType":"uint32","name":"target","type":"uint32"}],"name":"verifyFight","outputs":[],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"weapons","outputs":[{"internalType":"contract Weapons","name":"","type":"address"}],"stateMutability":"view","type":"function"}]

const weaponABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"burned","type":"uint256"}],"name":"Burned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"weapon","type":"uint256"},{"indexed":true,"internalType":"address","name":"minter","type":"address"}],"name":"NewWeapon","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"reforged","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"burned","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"lowPoints","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"fourPoints","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"fivePoints","type":"uint8"}],"name":"Reforged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"reforged","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"lowDust","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"fourDust","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"fiveDust","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"lowPoints","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"fourPoints","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"fivePoints","type":"uint8"}],"name":"ReforgedWithDust","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GAME_ADMIN","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RECEIVE_DOES_NOT_SET_TRANSFER_TIMESTAMP","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"burnID","type":"uint256"}],"name":"_calculateBurnValues","outputs":[{"internalType":"uint8[]","name":"","type":"uint8[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"burnID","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"burnPointMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint8","name":"amount","type":"uint8"}],"name":"drainDurability","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fiveStarBurnPowerPerPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fourStarBurnPowerPerPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"get","outputs":[{"internalType":"uint16","name":"_properties","type":"uint16"},{"internalType":"uint16","name":"_stat1","type":"uint16"},{"internalType":"uint16","name":"_stat2","type":"uint16"},{"internalType":"uint16","name":"_stat3","type":"uint16"},{"internalType":"uint8","name":"_level","type":"uint8"},{"internalType":"uint8","name":"_blade","type":"uint8"},{"internalType":"uint8","name":"_crossguard","type":"uint8"},{"internalType":"uint8","name":"_grip","type":"uint8"},{"internalType":"uint8","name":"_pommel","type":"uint8"},{"internalType":"uint24","name":"_burnPoints","type":"uint24"},{"internalType":"uint24","name":"_bonusPower","type":"uint24"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getBonusPower","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint8","name":"level","type":"uint8"}],"name":"getBonusPowerForFight","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDurabilityMaxWait","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getDurabilityPoints","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"timestamp","type":"uint64"}],"name":"getDurabilityPointsFromTimestamp","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getDurabilityTimestamp","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"playerAddress","type":"address"}],"name":"getDustSupplies","outputs":[{"internalType":"uint32[]","name":"","type":"uint32[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint8","name":"charTrait","type":"uint8"}],"name":"getFightData","outputs":[{"internalType":"int128","name":"","type":"int128"},{"internalType":"int128","name":"","type":"int128"},{"internalType":"uint24","name":"","type":"uint24"},{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getLevel","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getPowerMultiplier","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"properties","type":"uint16"},{"internalType":"uint16","name":"stat1","type":"uint16"},{"internalType":"uint16","name":"stat2","type":"uint16"},{"internalType":"uint16","name":"stat3","type":"uint16"},{"internalType":"uint8","name":"trait","type":"uint8"}],"name":"getPowerMultiplierForTrait","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getProperties","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"seed","type":"uint256"},{"internalType":"uint256","name":"seed2","type":"uint256"},{"internalType":"uint8","name":"limit","type":"uint8"}],"name":"getRandomCosmetic","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"stars","type":"uint256"},{"internalType":"uint256","name":"seed","type":"uint256"}],"name":"getRandomProperties","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint16","name":"minRoll","type":"uint16"},{"internalType":"uint16","name":"maxRoll","type":"uint16"},{"internalType":"uint256","name":"seed","type":"uint256"},{"internalType":"uint256","name":"seed2","type":"uint256"}],"name":"getRandomStat","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getStars","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"properties","type":"uint16"}],"name":"getStarsFromProperties","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getStat1","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"statPattern","type":"uint8"}],"name":"getStat1Trait","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getStat2","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"statPattern","type":"uint8"}],"name":"getStat2Trait","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getStat3","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"statPattern","type":"uint8"}],"name":"getStat3Trait","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"stars","type":"uint256"}],"name":"getStatCount","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"stars","type":"uint256"}],"name":"getStatMaxRoll","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"stars","type":"uint256"}],"name":"getStatMinRoll","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getStatPattern","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"properties","type":"uint16"}],"name":"getStatPatternFromProperties","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getTrait","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"properties","type":"uint16"}],"name":"getTraitFromProperties","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"isDurabilityFull","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lastTransferTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lowStarBurnPowerPerPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxDurability","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"migrateTo_951a020","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrateTo_aa9da90","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrateTo_e55d8c5","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"},{"internalType":"uint256","name":"seed","type":"uint256"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"},{"internalType":"uint256","name":"stars","type":"uint256"},{"internalType":"uint256","name":"seed","type":"uint256"}],"name":"mintWeaponWithStars","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oneFrac","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"},{"internalType":"uint16","name":"properties","type":"uint16"},{"internalType":"uint16","name":"stat1","type":"uint16"},{"internalType":"uint16","name":"stat2","type":"uint16"},{"internalType":"uint16","name":"stat3","type":"uint16"},{"internalType":"uint256","name":"cosmeticSeed","type":"uint256"}],"name":"performMintWeapon","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"powerMultPerPointBasic","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"powerMultPerPointMatching","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"powerMultPerPointPWR","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"reforgeID","type":"uint256"},{"internalType":"uint256","name":"burnID","type":"uint256"}],"name":"reforge","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"reforgeID","type":"uint256"},{"internalType":"uint8","name":"amountLB","type":"uint8"},{"internalType":"uint8","name":"amount4B","type":"uint8"},{"internalType":"uint8","name":"amount5B","type":"uint8"}],"name":"reforgeWithDust","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"secondsPerDurability","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"multiplier","type":"uint256"}],"name":"setBurnPointMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint64","name":"timestamp","type":"uint64"}],"name":"setDurabilityTimestamp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"powerPerBurnPoint","type":"uint256"}],"name":"setFiveStarBurnPowerPerPoint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"powerPerBurnPoint","type":"uint256"}],"name":"setFourStarBurnPowerPerPoint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"powerPerBurnPoint","type":"uint256"}],"name":"setLowStarBurnPowerPerPoint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const characterABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"character","type":"uint256"},{"indexed":false,"internalType":"uint16","name":"level","type":"uint16"}],"name":"LevelUp","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"character","type":"uint256"},{"indexed":true,"internalType":"address","name":"minter","type":"address"}],"name":"NewCharacter","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GAME_ADMIN","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NO_OWNED_LIMIT","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RECEIVE_DOES_NOT_SET_TRANSFER_TIMESTAMP","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TRANSFER_COOLDOWN","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"characterLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint16","name":"xp","type":"uint16"}],"name":"gainXp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"get","outputs":[{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint64","name":"","type":"uint64"},{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint8","name":"amount","type":"uint8"}],"name":"getFightDataAndDrainStamina","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getLevel","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getPower","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"level","type":"uint8"}],"name":"getPowerAtLevel","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint8","name":"currentLevel","type":"uint8"}],"name":"getRequiredXpForNextLevel","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStaminaMaxWait","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getStaminaPoints","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"timestamp","type":"uint64"}],"name":"getStaminaPointsFromTimestamp","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getStaminaTimestamp","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getTrait","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getXp","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"isStaminaFull","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lastTransferTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxStamina","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"migrateTo_1ee400a","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrateTo_951a020","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrateTo_b627f23","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract Promos","name":"_promos","type":"address"}],"name":"migrateTo_ef994e2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"},{"internalType":"uint256","name":"seed","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"promos","outputs":[{"internalType":"contract Promos","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"secondsPerStamina","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"max","type":"uint256"}],"name":"setCharacterLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint64","name":"timestamp","type":"uint64"}],"name":"setStaminaTimestamp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferCooldownEnd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferCooldownLeft","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const Web3 = require('web3')
const rpcURL = "https://bsc-dataseed1.binance.org/"
const web3 = new Web3(rpcURL)

const Tx = require('ethereumjs-tx')

const userSettings = require('./userSettings.json')

const options = require('./options.json')

const { accounts, privateKeys } = userSettings

const { OPTIMIZE_STAMINA, MIN_CHANCE, PREFERRED_CHANCE, CLAIM_EXP  } = options

const gameAddress = '0x39Bea96e13453Ed52A734B6ACEeD4c41F57B2271'
const weaponAddress = '0x7e091b0a220356b157131c831258a9c98ac8031a'
const characterAddress = '0xc6f252c2CdD4087e30608A35c022ce490B58179b'

const gameContract = new web3.eth.Contract(
    gameABI,
    gameAddress
);

const weaponContract = new web3.eth.Contract(
    weaponABI,
    weaponAddress
);

const characterContract = new web3.eth.Contract(
    characterABI,
    characterAddress
);

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const EXPERIENCE_TABLE = [
    16, 17, 18, 19, 20, 22, 24, 26, 28, 30,
    33, 36, 39, 42, 46, 50, 55, 60, 66, 72,
    79, 86, 94, 103, 113, 124, 136, 149, 163, 178, 
    194, 211, 229, 248, 268, 289, 311, 334, 358, 383, 
    409, 436, 464, 493, 523, 554, 586, 619, 653, 688, 
    724, 761, 799, 838, 878, 919, 961, 1004, 1048, 1093, 
    1139, 1186, 1234, 1283, 1333, 1384, 1436, 1489, 1543, 1598, 
    1654, 1711, 1769, 1828, 1888, 1949, 2011, 2074, 2138, 2203, 
    2269, 2336, 2404, 2473, 2543, 2614, 2686, 2759, 2833, 2908, 
    2984, 3061, 3139, 3218, 3298, 3379, 3461, 3544, 3628, 3713, 
    3799, 3886, 3974, 4063, 4153, 4244, 4336, 4429, 4523, 4618, 
    4714, 4811, 4909, 5008, 5108, 5209, 5311, 5414, 5518, 5623, 
    5729, 5836, 5944, 6053, 6163, 6274, 6386, 6499, 6613, 6728, 
    6844, 6961, 7079, 7198, 7318, 7439, 7561, 7684, 7808, 7933, 
    8059, 8186, 8314, 8443, 8573, 8704, 8836, 8969, 9103, 9238, 
    9374, 9511, 9649, 9788, 9928, 10069, 10211, 10354, 10498, 10643, 
    10789, 10936, 11084, 11233, 11383, 11534, 11686, 11839, 11993, 12148, 
    12304, 12461, 12619, 12778, 12938, 13099, 13261, 13424, 13588, 13753, 
    13919, 14086, 14254, 14423, 14593, 14764, 14936, 15109, 15283, 15458, 
    15634, 15811, 15989, 16168, 16348, 16529, 16711, 16894, 17078, 17263, 
    17449, 17636, 17824, 18013, 18203, 18394, 18586, 18779, 18973, 19168, 
    19364, 19561, 19759, 19958, 20158, 20359, 20561, 20764, 20968, 21173, 
    21379, 21586, 21794, 22003, 22213, 22424, 22636, 22849, 23063, 23278, 
    23494, 23711, 23929, 24148, 24368, 24589, 24811, 25034, 25258, 25483, 
    25709, 25936, 26164, 26393, 26623, 26854, 27086, 27319, 27553, 27788, 
    28024, 28261, 28499, 28738, 28978
];

let totalWins = 0
let totalLosses = 0
let skillEarned = 0

async function checkExperienceToClaim(claimExp, character){
    if(claimExp){
        return true
    }else if(CLAIM_EXP){
        let heroLevel = await characterContract.methods.getLevel(character).call();
        let nextChangeLevel = parseInt(heroLevel / 10) * 10 + 11
        let expRequired = 0
        for(let level = heroLevel; level < nextChangeLevel - 1; level++){
            expRequired += EXPERIENCE_TABLE[level]
        }
        let heroXp = await characterContract.methods.getXp(character).call();
        expRequired -= heroXp
        let xpRewards = await gameContract.methods.getXpRewards(character).call();
        if(xpRewards >= expRequired){
            return true
        }
    }
    return false
}

async function claimXpRewards(account, privateKey, claimExp){
    if(claimExp){
        let dataClaimExp = gameContract.methods.claimXpRewards().encodeABI()

        await web3.eth.getTransactionCount(account, async(err, txCount) => {
            const txObject = {
                nonce:    web3.utils.toHex(txCount),
                from:     account,
                to:       gameAddress,
                data:     dataClaimExp,
                value:    web3.utils.toHex(web3.utils.toWei('0', 'ether')),
                gasLimit: web3.utils.toHex(6000000),
                gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
            }
        
            const tx = new Tx(txObject)
            tx.sign(privateKey)
            const serializedTx = tx.serialize()
            const raw = '0x' + serializedTx.toString('hex')
    
            await web3.eth.sendSignedTransaction(raw,(err, txHash)=>{
                if(err != null){
                    console.log(err)
                }
                console.log("Exp claimed. Tx: ", txHash)
            }).once('receipt', async(receipt) => {})
        })
    }
    return false
}

async function fight(character, weapon, target, account, privateKey, staminaMultiplier){   
    let dataFight = gameContract.methods.fight(character, weapon, target, staminaMultiplier).encodeABI()

    web3.eth.getTransactionCount(account, async(err, txCount) => {
        const txObject = {
            nonce:    web3.utils.toHex(txCount),
            from:     account,
            to:       gameAddress,
            data:     dataFight,
            value:    web3.utils.toHex(web3.utils.toWei('0', 'ether')),
            gasLimit: web3.utils.toHex(6000000),
            gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
        }
    
        const tx = new Tx(txObject)
        tx.sign(privateKey)
        const serializedTx = tx.serialize()
        const raw = '0x' + serializedTx.toString('hex')
      
        let resultTx;

        await web3.eth.sendSignedTransaction(raw,(err, txHash)=>{
            if(err != null){
                console.log(err)
            }
            resultTx = txHash
            console.log(txHash)
        }).once('receipt', async(receipt) => {
            let data = receipt.logs[0].data
            let topics = [receipt.logs[0].topics[1], receipt.logs[0].topics[2]]
            
            let result = await web3.eth.abi.decodeLog(
                [
                    {type: 'address', name: 'owner', indexed: true}, 
                    {type: 'uint256', name: 'character', indexed: true}, 
                    {type: 'uint256', name: 'weapon'}, 
                    {type: 'uint32', name: 'target'}, 
                    {type: 'uint24', name: 'playerRoll'}, 
                    {type: 'uint24', name: 'enemyRoll'}, 
                    {type: 'uint16', name: 'xpGain'}, 
                    {type: 'uint256', name: 'skillGain'}
                ], data, topics
            )

            if(result.skillGain > 0){
                totalWins++
                skillEarned += (result.skillGain / 1e18)
            }else{
                totalLosses++
            }
        })
    })
}

function calculateWinChances(heroPower, enemyPower){
    let wins = 0
    let losses = 0
    let heroMinPower = heroPower * 0.9
    let heroMaxPower = heroPower * 1.1
    let enemyMinPower = enemyPower * 0.9
    let enemyMaxPower = enemyPower * 1.1
    for(let heroTempPower = heroMinPower; heroTempPower <= heroMaxPower; heroTempPower++){
        if(heroTempPower - enemyMinPower > 0){
            wins += heroTempPower - enemyMinPower
        }
        if(enemyMaxPower - heroTempPower > 0){
            losses += enemyMaxPower - heroTempPower
        }
    }
    return(wins / (losses + wins) * 100)
}

async function selectEnemy(character, weapon){
    let characterTrait = await characterContract.methods.getTrait(character).call()
    let weaponTrait = await weaponContract.methods.getTrait(weapon).call()

    //----------Poder del héroe----------//
    let basePowerLevel = await characterContract.methods.getPower(character).call()
    let fightData = await weaponContract.methods.getFightData(weapon, characterTrait).call()
    let weaponMultFight = fightData[1]
    let weaponBonusPower = fightData[2]
    let playerPower = await gameContract.methods.getPlayerPower(
        basePowerLevel, weaponMultFight, weaponBonusPower
    ).call()
    let targets = await gameContract.methods.getTargets(character, weapon).call()
    let targetSelected = -1
    let diffPowerFinal = 0
    let finalPlayerPower
    let enemyPower

    //----------Selección de enemigo----------//
    for(let x = 0; x < targets.length; x++){
        let target = targets[x]
        let enemyTrait = parseInt(target, 10) >> 24
        let traitBonus = 0
        traitBonus += (characterTrait == weaponTrait) ? 0.075 : 0
        traitBonus += (
            characterTrait == enemyTrait-1 || 
            (characterTrait == 3 && enemyTrait == 0)
        ) ? 0.075 : 0
        traitBonus += (
            characterTrait-1 == enemyTrait || (characterTrait == 0 && enemyTrait == 3)
        ) ? -0.075 : 0
        let tempfinalPlayerPower = parseInt(playerPower * (1 + traitBonus))
        let tempEnemyPower = (target & 0xFFFFFF)
        let diffPower =  tempfinalPlayerPower - tempEnemyPower
        if(diffPower > diffPowerFinal || diffPowerFinal == 0){
            targetSelected = target
            diffPowerFinal = diffPower
            enemyPower = tempEnemyPower
            finalPlayerPower = tempfinalPlayerPower
        }
    }

    return{
        finalPlayerPower,
        targetSelected,
        enemyPower
    }
}

function printStats(totalWins, totalLosses, skillEarned, maxStamina, minStamina, FULL_STAMINA, SECONDS_PER_STAMINA){
    console.log("Wins: ", totalWins)
    console.log("Losses: ", totalLosses)
    console.log("Skill earned: ", skillEarned.toFixed(4))
    let nextFullStaminaInHours = parseInt((FULL_STAMINA - maxStamina) * SECONDS_PER_STAMINA / 60 / 60)
    console.log("Next full stamina in ", nextFullStaminaInHours, " hours.")
    let nextFullStaminaInSeconds = (FULL_STAMINA - maxStamina) * SECONDS_PER_STAMINA
    let currentDate = new Date()
    currentDate.setSeconds(currentDate.getSeconds() + nextFullStaminaInSeconds)
    let fullStaminaDate = currentDate.getDate() + "/"
                + (currentDate.getMonth()+1)  + "/" 
                + currentDate.getFullYear() + " @ "  
                + currentDate.getHours() + ":"  
                + currentDate.getMinutes() + ":" 
                + (currentDate.getSeconds());
    console.log(fullStaminaDate)
    if(OPTIMIZE_STAMINA){
        let nextMinStaminaInHours = parseInt((FULL_STAMINA - minStamina) * SECONDS_PER_STAMINA / 60 / 60)
        console.log("You will have all your character with at least 160 stamina in ",nextMinStaminaInHours, " hours.")
        let nextMinStaminaInSeconds = (FULL_STAMINA - minStamina) * SECONDS_PER_STAMINA
        currentDate = new Date()
        currentDate.setSeconds(currentDate.getSeconds() + nextMinStaminaInSeconds)
        let minStaminaDate = currentDate.getDate() + "/"
                    + (currentDate.getMonth()+1)  + "/" 
                    + currentDate.getFullYear() + " @ "  
                    + currentDate.getHours() + ":"  
                    + currentDate.getMinutes() + ":" 
                    + (currentDate.getSeconds());
        console.log(minStaminaDate)
    }
}

async function main(){
    const BASE_STAMINA_COST_PER_FIGHT = 40
    const FULL_STAMINA = await characterContract.methods.maxStamina().call()
    const MIN_STAMINA_COST_PER_FIGHT = OPTIMIZE_STAMINA ? 
        FULL_STAMINA - BASE_STAMINA_COST_PER_FIGHT : 
        BASE_STAMINA_COST_PER_FIGHT
    const SECONDS_PER_STAMINA = await characterContract.methods.secondsPerStamina().call()
    let minStamina = FULL_STAMINA
    let maxStamina = 0

    let account, privateKey, characters, weapons
    let claimExp = false

    for(let j = 0; j < accounts.length; j++){
        account = accounts[j]
        privateKey = Buffer.from(privateKeys[j], 'hex')
        characters = await gameContract.methods.getMyCharacters().call( { from: account } )
        weapons = await gameContract.methods.getMyWeapons().call( { from: account } )

        console.log("Account ", j, ": ", account)
        
        for(let i = 0; i < characters.length; i++){
            let character = characters[i]
            console.log("Character ", i)
            let stamina = Number(await characterContract.methods.getStaminaPoints(character).call())

            while(stamina >= MIN_STAMINA_COST_PER_FIGHT){
                let weaponSelected
                let targetSelected
                let enemyPowerSelected
                let finalWinChance = 0

                for(let x = 0; x < weapons.length ; x++){
                    let weapon = weapons[x]                
                    let fightSelected = await selectEnemy(character, weapon)
                    let winChance = calculateWinChances(
                        fightSelected.finalPlayerPower, 
                        fightSelected.enemyPower
                    )
                    
                    if(winChance > finalWinChance){
                        weaponSelected = weapon
                        targetSelected = fightSelected.targetSelected
                        finalWinChance = winChance
                        enemyPowerSelected = fightSelected.enemyPower
                    }
                }
                console.log("Selected enemy with power ", enemyPowerSelected, " using weapon id ", weaponSelected)

                if(
                    (finalWinChance < MIN_CHANCE && !OPTIMIZE_STAMINA) ||
                    (finalWinChance < PREFERRED_CHANCE && OPTIMIZE_STAMINA)
                ){
                    let currentDate = new Date();
                    let secondsToFullStamina = (FULL_STAMINA - stamina) * SECONDS_PER_STAMINA
                    let characterFullStaminaDate = new Date(currentDate.getTime() + secondsToFullStamina * 1000);
                    if(currentDate.getHours() == characterFullStaminaDate.getHours() &&
                        currentDate.getDate() == characterFullStaminaDate.getDate()){
                        console.log("Win chance too low but fighting because the character will fill his stamina in this same hour.")
                    }else{
                        console.log("Win chance too low with any weapon. Omitted character")
                        break
                    }
                }
                
                let staminaMultiplier = 1
                
                // This if becomes redundant if OPTIMIZE_STAMINA is true, but allows
                // compatibility in the case OPTIMIZE_STAMINA is false
                if(finalWinChance >= PREFERRED_CHANCE){
                    staminaMultiplier = parseInt(stamina / BASE_STAMINA_COST_PER_FIGHT)
                    console.log("Win chance ", finalWinChance.toFixed(2),"%. Fighting with", staminaMultiplier.toString() + "x", "stamina");
                }else{
                    console.log("Win chance ", finalWinChance.toFixed(2),"%")
                }

                await fight(character, weaponSelected, targetSelected, account, privateKey, staminaMultiplier)
                await delay(30000)
                
                // Subtract stamina manually instead of adding requests
                stamina -= BASE_STAMINA_COST_PER_FIGHT * staminaMultiplier
            }
            if(stamina > maxStamina){
                maxStamina = stamina
            }
            if(stamina < minStamina){
                minStamina = stamina
            }
            claimExp = await checkExperienceToClaim(claimExp, character)
        }
        claimExp = await claimXpRewards(account, privateKey, claimExp)
        await delay(10000)
    }
    printStats(totalWins, totalLosses, skillEarned, maxStamina, minStamina, FULL_STAMINA, SECONDS_PER_STAMINA)
}

main()