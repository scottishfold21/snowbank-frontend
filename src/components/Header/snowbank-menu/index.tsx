import { useState } from "react";
import { getAddresses, TOKEN_DECIMALS, DEFAULD_NETWORK } from "../../../constants";
import { useSelector } from "react-redux";
import { Link, Fade, Popper } from "@material-ui/core";
import "./snowbank-menu.scss";
import { IReduxState } from "../../../store/slices/state.interface";
import { getTokenUrl } from "../../../helpers";

import { useTranslation } from "react-i18next";

const addTokenToWallet = (tokenSymbol: string, tokenAddress: string) => async () => {
    const tokenImage = getTokenUrl(tokenSymbol.toLowerCase());

    if (window.ethereum) {
        try {
            await window.ethereum.request({
                method: "wallet_watchAsset",
                params: {
                    type: "ERC20",
                    options: {
                        address: tokenAddress,
                        symbol: tokenSymbol,
                        decimals: TOKEN_DECIMALS,
                    },
                },
            });
        } catch (error) {
            console.log(error);
        }
    }
};

function SnowbankMenu() {
    const { t } = useTranslation();

    const [anchorEl, setAnchorEl] = useState(null);
    const isEthereumAPIAvailable = window.ethereum;

    const networkID = useSelector<IReduxState, number>(state => {
        return (state.app && state.app.networkID) || DEFAULD_NETWORK;
    });

    const addresses = getAddresses(networkID);

    const SSB_ADDRESS = addresses.SSB_ADDRESS;
    const SB_ADDRESS = addresses.SB_ADDRESS;
    const CAT_ADDRESS = addresses.CAT_ADDRESS;

    const handleClick = (event: any) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);

    return (
        <div className="sb-menu-root" onMouseEnter={e => handleClick(e)} onMouseLeave={e => handleClick(e)}>
            <div className="sb-menu-btn">
                <p>{t("BuySB")}</p>
            </div>

            <Popper className="sb-menu-popper" open={open} anchorEl={anchorEl} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={200}>
                        <div className="tooltip">
                            <Link
                                className="tooltip-item"
                                href={`https://tethys.finance/swap?outputCurrency=0x15EFa58fE3182cD01E8a01EcAcb4b653C2853705&inputCurrency=METIS`}
                                target="_blank"
                            >
                                <p>{t("BuyOnTraderJoe")}</p>
                            </Link>

                            {isEthereumAPIAvailable && (
                                <div className="add-tokens">
                                    <div className="divider" />
                                    <p className="add-tokens-title">{t("AddTokenToWallet")}</p>
                                    <div className="divider" />
                                    <div className="tooltip-item" onClick={addTokenToWallet("CAT", CAT_ADDRESS)}>
                                        <p>↑ CAT</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Fade>
                )}
            </Popper>
        </div>
    );
}

export default SnowbankMenu;
