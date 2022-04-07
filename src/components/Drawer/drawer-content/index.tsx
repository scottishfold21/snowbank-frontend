import { NavLink } from "react-router-dom";
import Social from "./social";
import StakeIcon from "../../../assets/icons/stake.svg";
import RedeemIcon from "../../../assets/icons/swap.svg";
import BondIcon from "../../../assets/icons/bond.svg";
import BuyIcon from "../../../assets/icons/buy.svg";
import BorrowIcon from "../../../assets/icons/borrow.svg";
import Snowglobe from "../../../assets/icons/snowglobe.svg";
import GovIcon from "../../../assets/icons/governance.svg";

import ProIcon from "../../../assets/icons/pro.svg";
import SnowbankIcon from "../../../assets/icons/spacecat-nav-header.png";
import DashboardIcon from "../../../assets/icons/dashboard.svg";
import { trim, shorten } from "../../../helpers";
import { useAddress } from "../../../hooks";
import useBonds from "../../../hooks/bonds";
import { Link } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import "./drawer-content.scss";
import useENS from "src/hooks/useENS";
import Davatar from "@davatar/react";

import { useTranslation } from "react-i18next";

function NavContent() {
    const { t } = useTranslation();

    const address = useAddress();
    const { bonds } = useBonds();
    const { ensName } = useENS(address);

    return (
        <div className="dapp-sidebar">
            <div className="branding-header">
                <Link href="https://docs.spacecatmetis.xyz/" target="_blank">
                    <img alt="" src={SnowbankIcon} />
                </Link>

                {address && (
                    <div className="wallet-link">
                        <Davatar size={20} address={address} generatedAvatarType="jazzicon" />
                        <Link href={`https://andromeda-explorer.metis.io/address/${address}`} target="_blank">
                            <p>{ensName || shorten(address)}</p>
                        </Link>
                    </div>
                )}
            </div>

            <div className="dapp-menu-links">
                <div className="dapp-nav">
                    <Link component={NavLink} to="/dashboard" className="button-dapp-menu">
                        <div className="dapp-menu-item">
                            <img alt="" src={DashboardIcon} />
                            <p>{t("Dashboard")}</p>
                        </div>
                    </Link>

                    <Link component={NavLink} to="/snowglobe" className="button-dapp-menu">
                        <div className="dapp-menu-item">
                            <img alt="" src={Snowglobe} />
                            <p>{t("McLaren Calculator")}</p>
                        </div>
                    </Link>

                    {/* <Link component={NavLink} to="/redeem" className="button-dapp-menu">
                        <div className="dapp-menu-item">
                            <img alt="" src={RedeemIcon} />
                            <p>Taxation Details</p>
                        </div>
                    </Link> */}

                    <Link component={NavLink} to="/stake" className="button-dapp-menu">
                        <div className="dapp-menu-item">
                            <img alt="" src={StakeIcon} />
                            <p>Margin AMM (Coming Soon!)</p>
                        </div>
                    </Link>

                    {/*    <Link component={NavLink} id="wrap-nav" to="/wrap" className="button-dapp-menu">
                        <div className="dapp-menu-item">
                            <img alt="" src={BorrowIcon} />

                            <p>Unwrap</p>
                        </div>
                    </Link> */}

                    {/*    <Link component={NavLink} id="bond-nav" to="/mints" className="button-dapp-menu">
                        <div className="dapp-menu-item">
                            <img alt="" src={BondIcon} />
                            <p>{t("Turbines")}</p>
                        </div> 
                    </Link> 

                    {/*    <div className="bond-discounts">
                        <p className="bond-discounts-title">{t("TurbinesDiscounts")}</p>
                        {bonds
                            .filter(bond => bond.isActive)
                            .map((bond, i) => (
                                <Link component={NavLink} to={`/mints/${bond.name}`} key={i} className={"bond"}>
                                    {!bond.bondDiscount ? (
                                        <Skeleton variant="text" width={"150px"} />
                                    ) : (
                                        <p>
                                            {bond.displayName}
                                            <span className="bond-pair-roi">{bond.bondDiscount && trim(bond.bondDiscount * 100, 2)}%</span>
                                        </p>
                                    )}
                                </Link>
                            ))}
                    </div> */}

                    <Link
                        href="https://tethys.finance/trade?inputCurrency=0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000&outputCurrency=0x15EFa58fE3182cD01E8a01EcAcb4b653C2853705#/"
                        target="_blank"
                    >
                        <div className="button-dapp-menu">
                            <div className="dapp-menu-item">
                                <img alt="" src={BuyIcon} />
                                <p>{t("Buy")}</p>
                            </div>
                        </div>
                    </Link>

                    {/* <Link component={NavLink} to="/snowglobe" className="button-dapp-menu">
                        <div className="button-dapp-menu">
                            <div className="dapp-menu-item">
                                <img alt="" src={Snowglobe} />
                                <p>{t("Snowglobe")}</p>
                            </div>
                        </div>
                    </Link> */}

                    {/* <Link component={NavLink} id="bond-nav" to="#" className="button-dapp-menu">
                        <div className="dapp-menu-item">
                            <img alt="" src={BorrowIcon} />
                            <p>{t("Borrow")}</p>
                            <span>{t("ComingSoon")}</span>
                        </div>
                    </Link> */}

                    {/* <Link component={NavLink} id="bond-nav" to="#" className="button-dapp-menu">
                        <div className="dapp-menu-item">
                            <img alt="" src={ProIcon} />
                            <p>{t("SBPro")}</p>
                            <span>{t("ComingSoon")}</span>
                        </div>
                    </Link> */}

                    <Link href="https://snapshot.org" target="_blank" className="button-dapp-menu">
                        <div className="dapp-menu-item">
                            <img alt="" src={GovIcon} />
                            <p>{t("Governance")}</p>
                        </div>
                    </Link>
                </div>
            </div>

            <Social />
        </div>
    );
}

export default NavContent;
