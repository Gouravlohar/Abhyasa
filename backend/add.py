import cv2
import numpy as np

def add():
    modelFile = "models/res10_300x300_ssd_iter_140000.caffemodel"
    configFile = "models/deploy.prototxt"
    net = cv2.dnn.readNetFromCaffe(configFile, modelFile)

    # Open the default camera
    cap = cv2.VideoCapture(0)

    # Check if the camera opened successfully
    if not cap.isOpened():
        return "Unable to open camera"

    while True:
        # Capture a single frame
        ret, img = cap.read()

        if ret:
            h, w = img.shape[:2]
            blob = cv2.dnn.blobFromImage(cv2.resize(img, (300, 300)), 1.0,
                                         (300, 300), (104.0, 117.0, 123.0))
            net.setInput(blob)
            faces = net.forward()

            # to draw faces on image
            face_count = 0
            for i in range(faces.shape[2]):
                confidence = faces[0, 0, i, 2]
                if confidence > 0.5:
                    face_count += 1
                    box = faces[0, 0, i, 3:7] * np.array([w, h, w, h])
                    (x, y, x1, y1) = box.astype("int")
                    cv2.rectangle(img, (x, y), (x1, y1), (0, 255, 0), 2)
                    cv2.putText(img, str(confidence), (x, y-10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (36,255,12), 2)

            if face_count > 1:
                cv2.putText(img, "More than one face detected", (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0,0,255), 2)

            cv2.imshow('img', img)
            if cv2.waitKey(1) & 0xFF == ord('q'):  # press q to quit
                break
        else:
            return "Unable to read frame from camera"

    # Release the camera
    cap.release()
    cv2.destroyAllWindows()

    return "Finished running add function"