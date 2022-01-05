import React, {useState, lazy, Suspense} from "react";
import Loader from "./../../../../shared/loader";
import Icons from "../../../../shared/icons";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {NewPortfolioBody} from "./style";

const NewPortfolioModal = lazy(() => {
    return new Promise((resolve) => resolve(import("./modal")));
});

// import NewPortfolioModal from "./modal";

const NewPortfolio = () => {
    const [modal, setModal] = useState(true);

    const toggle = () => setModal(!modal);

    return (
        <>
            <NewPortfolioBody className="mt-5 d-flex ">
                <div>
                    <Button
                        size="md"
                        className="d-flex align-items-center new-portfolio"
                        onClick={toggle}
                    >
                        ساخت پورتفولیو جدید
                        <span>
              <Icons name="new" width={25}/>
            </span>
                    </Button>
                </div>
            </NewPortfolioBody>
            <Modal isOpen={modal} toggle={toggle} size="xl">
                <ModalHeader>ساخت نمونه کار جدید</ModalHeader>
                <ModalBody>
                    <Suspense fallback={<Loader/>}>
                        <NewPortfolioModal/>
                    </Suspense>
                </ModalBody>
                <ModalFooter>
                    <div className="w-100">
                        <Button color="secondary" onClick={toggle}>
                            انصراف
                        </Button>
                    </div>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default NewPortfolio;
